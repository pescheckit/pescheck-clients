
# OAuthApplication

Serializer for OAuth application creation requests

## Properties

Name | Type
------------ | -------------
`name` | string
`clientType` | string
`authorizationGrantType` | string
`redirectUris` | string
`divisionId` | string

## Example

```typescript
import type { OAuthApplication } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "clientType": null,
  "authorizationGrantType": null,
  "redirectUris": null,
  "divisionId": null,
} satisfies OAuthApplication

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthApplication
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


