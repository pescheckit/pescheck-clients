
# PaginatedDivisionReadOnlyList


## Properties

Name | Type
------------ | -------------
`count` | number
`next` | string
`previous` | string
`results` | [Array&lt;DivisionReadOnly&gt;](DivisionReadOnly.md)

## Example

```typescript
import type { PaginatedDivisionReadOnlyList } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "count": 1,
  "next": null,
  "previous": null,
  "results": null,
} satisfies PaginatedDivisionReadOnlyList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginatedDivisionReadOnlyList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


