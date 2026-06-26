
# PaginatedV2ProfileListItemList


## Properties

Name | Type
------------ | -------------
`count` | number
`next` | string
`previous` | string
`results` | [Array&lt;V2ProfileListItem&gt;](V2ProfileListItem.md)

## Example

```typescript
import type { PaginatedV2ProfileListItemList } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "count": 1,
  "next": null,
  "previous": null,
  "results": null,
} satisfies PaginatedV2ProfileListItemList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginatedV2ProfileListItemList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


