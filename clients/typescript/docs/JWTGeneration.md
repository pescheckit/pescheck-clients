
# JWTGeneration

Serializer for JWT token generation for API users

## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string
`organisationId` | string
`divisionId` | string

## Example

```typescript
import type { JWTGeneration } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "email": null,
  "password": null,
  "organisationId": null,
  "divisionId": null,
} satisfies JWTGeneration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JWTGeneration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


