import { AwsRum } from "aws-rum-web"

let client: AwsRum | null = null

export function initRum(): AwsRum | null {
  const monitorId = process.env.NEXT_PUBLIC_RUM_APP_MONITOR_ID
  const region = process.env.NEXT_PUBLIC_RUM_REGION
  if (!monitorId || !region || client) return client
  try {
    client = new AwsRum(monitorId, "1.0.0", region, {
      identityPoolId: process.env.NEXT_PUBLIC_RUM_IDENTITY_POOL_ID,
      guestRoleArn: process.env.NEXT_PUBLIC_RUM_GUEST_ROLE_ARN,
      // aws-rum-web defaults the dataplane endpoint to us-west-2 regardless of
      // the region argument, so it must be set explicitly
      endpoint: `https://dataplane.rum.${region}.amazonaws.com`,
      sessionSampleRate: Number(process.env.NEXT_PUBLIC_RUM_SAMPLE_RATE ?? 1),
      telemetries: ["errors", "performance", "http"],
      allowCookies: true
    })
  } catch {
    client = null
  }
  return client
}
