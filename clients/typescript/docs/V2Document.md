
# V2Document

One document attached to a screening\'s check. `metadata` carries check-specific extras and may be empty.

## Properties

Name | Type
------------ | -------------
`checkId` | string
`checkType` | string
`filename` | string
`extension` | string
`content` | [V2DocumentContent](V2DocumentContent.md)
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { V2Document } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "checkId": null,
  "checkType": null,
  "filename": null,
  "extension": null,
  "content": null,
  "metadata": null,
} satisfies V2Document

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2Document
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


