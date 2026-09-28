
# V2ScreeningDetailOrganisation

Organisation owning this screening. For departments, the department itself.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string

## Example

```typescript
import type { V2ScreeningDetailOrganisation } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
} satisfies V2ScreeningDetailOrganisation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningDetailOrganisation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


