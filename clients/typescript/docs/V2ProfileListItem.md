
# V2ProfileListItem


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`isCustom` | boolean
`checkTypes` | Array&lt;string&gt;
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { V2ProfileListItem } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "isCustom": null,
  "checkTypes": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies V2ProfileListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


