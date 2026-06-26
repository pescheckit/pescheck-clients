
# VerifyWebhook

Body shape for POST /webhooks/{id}/verify/. The verification code is the one sent to the webhook URL when the webhook was created; the receiver POSTs it back here to confirm ownership.

## Properties

Name | Type
------------ | -------------
`verificationCode` | string

## Example

```typescript
import type { VerifyWebhook } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "verificationCode": null,
} satisfies VerifyWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifyWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


