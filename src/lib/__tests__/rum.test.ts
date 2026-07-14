const rumEnv = {
  NEXT_PUBLIC_RUM_APP_MONITOR_ID: "monitor-123",
  NEXT_PUBLIC_RUM_REGION: "eu-west-2",
  NEXT_PUBLIC_RUM_IDENTITY_POOL_ID: "eu-west-2:pool-abc",
  NEXT_PUBLIC_RUM_GUEST_ROLE_ARN: "arn:aws:iam::123456789012:role/rum-unauth",
  NEXT_PUBLIC_RUM_SAMPLE_RATE: "1"
}

const originalEnv = process.env

async function loadRum() {
  jest.resetModules()
  jest.doMock("aws-rum-web", () => ({ AwsRum: jest.fn() }))
  const { initRum } = await import("@/lib/rum")
  const { AwsRum } = await import("aws-rum-web")
  return { initRum, AwsRum: AwsRum as unknown as jest.Mock }
}

describe("initRum", () => {
  beforeEach(() => {
    process.env = { ...originalEnv, ...rumEnv }
  })

  afterAll(() => {
    process.env = originalEnv
  })

  it("does nothing when the monitor id is not configured", async () => {
    delete process.env.NEXT_PUBLIC_RUM_APP_MONITOR_ID
    const { initRum, AwsRum } = await loadRum()

    expect(initRum()).toBeNull()
    expect(AwsRum).not.toHaveBeenCalled()
  })

  it("creates the client with the configured monitor, region, and endpoint", async () => {
    const { initRum, AwsRum } = await loadRum()

    initRum()

    expect(AwsRum).toHaveBeenCalledWith("monitor-123", "1.0.0", "eu-west-2", {
      identityPoolId: "eu-west-2:pool-abc",
      guestRoleArn: "arn:aws:iam::123456789012:role/rum-unauth",
      endpoint: "https://dataplane.rum.eu-west-2.amazonaws.com",
      sessionSampleRate: 1,
      telemetries: ["errors", "performance", "http"],
      allowCookies: true
    })
  })

  it("only creates the client once across repeated calls", async () => {
    const { initRum, AwsRum } = await loadRum()

    initRum()
    initRum()

    expect(AwsRum).toHaveBeenCalledTimes(1)
  })

  it("returns null instead of throwing when the client fails to initialise", async () => {
    const { initRum, AwsRum } = await loadRum()
    AwsRum.mockImplementationOnce(() => {
      throw new Error("bad config")
    })

    expect(initRum()).toBeNull()
  })
})
