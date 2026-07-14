#!/usr/bin/env bash
# Run once from your local machine (needs AWS CLI configured with admin credentials).
# Creates the CloudWatch RUM app monitor and the Cognito identity pool + IAM role
# that let browsers post RUM events. Prints the values for .env.production.

set -e

REGION="${AWS_REGION:-eu-west-2}"
APP="personal-site"
MONITOR_NAME="$APP"
POOL_NAME="${APP}-rum"
ROLE_NAME="${APP}-rum-unauth-role"

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "==> Creating Cognito identity pool for RUM..."
POOL_ID=$(aws cognito-identity create-identity-pool \
  --identity-pool-name "$POOL_NAME" \
  --allow-unauthenticated-identities \
  --region "$REGION" \
  --query IdentityPoolId --output text)
echo "    Identity pool: $POOL_ID"

echo "==> Creating IAM role for unauthenticated RUM clients..."
TRUST_DOC=$(cat <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Federated": "cognito-identity.amazonaws.com"},
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {"cognito-identity.amazonaws.com:aud": "${POOL_ID}"},
      "ForAnyValue:StringLike": {"cognito-identity.amazonaws.com:amr": "unauthenticated"}
    }
  }]
}
EOF
)

ROLE_ARN=$(aws iam create-role \
  --role-name "$ROLE_NAME" \
  --assume-role-policy-document "$TRUST_DOC" \
  --query Role.Arn --output text)

aws iam put-role-policy \
  --role-name "$ROLE_NAME" \
  --policy-name "${APP}-rum-put-events" \
  --policy-document "{
    \"Version\": \"2012-10-17\",
    \"Statement\": [{
      \"Effect\": \"Allow\",
      \"Action\": \"rum:PutRumEvents\",
      \"Resource\": \"arn:aws:rum:${REGION}:${ACCOUNT_ID}:appmonitor/${MONITOR_NAME}\"
    }]
  }"
echo "    Role: $ROLE_ARN"

aws cognito-identity set-identity-pool-roles \
  --identity-pool-id "$POOL_ID" \
  --roles "unauthenticated=${ROLE_ARN}" \
  --region "$REGION"

echo "==> Creating CloudWatch RUM app monitor..."
aws rum create-app-monitor \
  --name "$MONITOR_NAME" \
  --domain-list chrisbramley.com www.chrisbramley.com \
  --region "$REGION" \
  --app-monitor-configuration "{
    \"AllowCookies\": true,
    \"EnableXRay\": false,
    \"SessionSampleRate\": 1,
    \"Telemetries\": [\"errors\", \"performance\", \"http\"],
    \"IdentityPoolId\": \"${POOL_ID}\",
    \"GuestRoleArn\": \"${ROLE_ARN}\"
  }" \
  > /dev/null

MONITOR_ID=$(aws rum get-app-monitor \
  --name "$MONITOR_NAME" \
  --region "$REGION" \
  --query AppMonitor.Id --output text)
echo "    App monitor: $MONITOR_NAME ($MONITOR_ID)"

echo ""
echo "==> Put these values in .env.production (safe to commit — they are public"
echo "    identifiers embedded in the served JS bundle):"
echo ""
echo "NEXT_PUBLIC_RUM_APP_MONITOR_ID=${MONITOR_ID}"
echo "NEXT_PUBLIC_RUM_REGION=${REGION}"
echo "NEXT_PUBLIC_RUM_IDENTITY_POOL_ID=${POOL_ID}"
echo "NEXT_PUBLIC_RUM_GUEST_ROLE_ARN=${ROLE_ARN}"
echo "NEXT_PUBLIC_RUM_SAMPLE_RATE=1"
