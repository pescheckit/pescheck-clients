
# V2ProfileCheckEntry


## Properties

Name | Type
------------ | -------------
`id` | string
`checkType` | string
`displayName` | string
`configuredPrice` | [V2Money](V2Money.md)
`config` | { [key: string]: any; }
`inputFields` | Array&lt;object&gt;
`isSystemManaged` | boolean

## Example

```typescript
import type { V2ProfileCheckEntry } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "checkType": null,
  "displayName": null,
  "configuredPrice": null,
  "config": null,
  "inputFields": null,
  "isSystemManaged": null,
} satisfies V2ProfileCheckEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileCheckEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


