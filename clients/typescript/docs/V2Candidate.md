
# V2Candidate

Bucket-level candidate facts. Required-ness varies per profile; serializer is lenient.  Note: v2 tightens nationality vs v1 - v1 accepted any free-form string, v2 requires an ISO 3166-1 alpha-2 code so downstream consumers (watchlist matching, document readers, etc.) can rely on the value.

## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`initials` | string
`dateOfBirth` | string
`gender` | string
`nationality` | string
`postalCode` | string
`houseNumber` | string
`extension` | string

## Example

```typescript
import type { V2Candidate } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "initials": null,
  "dateOfBirth": null,
  "gender": null,
  "nationality": null,
  "postalCode": null,
  "houseNumber": null,
  "extension": null,
} satisfies V2Candidate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2Candidate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


