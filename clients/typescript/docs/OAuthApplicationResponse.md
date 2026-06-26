
# OAuthApplicationResponse

Serializer for OAuth application responses

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`clientId` | string
`clientSecret` | string
`clientType` | string
`authorizationGrantType` | string
`created` | Date
`updated` | Date

## Example

```typescript
import type { OAuthApplicationResponse } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "clientId": null,
  "clientSecret": null,
  "clientType": null,
  "authorizationGrantType": null,
  "created": null,
  "updated": null,
} satisfies OAuthApplicationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthApplicationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


