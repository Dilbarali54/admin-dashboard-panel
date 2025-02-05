export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'

)

export const token = assertValue(
  "skicPUauQu9WRH6QKvq2JlwCeodqTwjkBxdRtFXVQWZ6CNROlEKWSgS6ZopAVPmmJIDm8mX4nRfcZ0OLfkKYZqy13WCQYOOBQFktlrgIpgOowtk5MthlFm6WygAqM6nBzmQhtz9FkpPmpqjVEljasXIlwS58hCi2fywsWPv5bgiMuQ7Vm16X ",
  'Missing environment variable: NEXT_API_TOKEN'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
