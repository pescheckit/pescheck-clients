
# CustomTokenObtainPair

Custom JWT serializer that scopes the token to one organization.  The organization comes from the optional ``organization_id`` field, or from the user\'s single organization when the field is absent. Users with access to multiple organizations must pass ``organization_id`` explicitly; the token is never scoped implicitly (e.g. via the last viewed organization, which is mutable web-UI state).

## Properties

Name | Type
------------ | -------------
`organizationId` | string
`email` | string
`password` | string

## Example

```typescript
import type { CustomTokenObtainPair } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "organizationId": null,
  "email": null,
  "password": null,
} satisfies CustomTokenObtainPair

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomTokenObtainPair
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


