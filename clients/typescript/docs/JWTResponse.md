
# JWTResponse

Serializer for JWT token response

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`refreshToken` | string
`tokenType` | string
`expiresIn` | number
`organisation` | string
`organisationId` | string

## Example

```typescript
import type { JWTResponse } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "refreshToken": null,
  "tokenType": null,
  "expiresIn": null,
  "organisation": null,
  "organisationId": null,
} satisfies JWTResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JWTResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


