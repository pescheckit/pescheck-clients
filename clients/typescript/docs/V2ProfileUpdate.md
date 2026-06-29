
# V2ProfileUpdate

Replaces the profile - name, description and full checks list. Entries matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`checks` | [Array&lt;V2ProfileUpdateCheck&gt;](V2ProfileUpdateCheck.md)

## Example

```typescript
import type { V2ProfileUpdate } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "checks": null,
} satisfies V2ProfileUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


