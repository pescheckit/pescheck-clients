
# V2ScreeningCheckListItem

Minimal check entry shape for screening list items. No config/input/etc.

## Properties

Name | Type
------------ | -------------
`id` | string
`checkType` | string
`status` | string

## Example

```typescript
import type { V2ScreeningCheckListItem } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "checkType": null,
  "status": null,
} satisfies V2ScreeningCheckListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningCheckListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


