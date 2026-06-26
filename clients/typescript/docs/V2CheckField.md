
# V2CheckField

One config or input field a check accepts via the API.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`required` | boolean
`choices` | Array&lt;string&gt;
`helpText` | string

## Example

```typescript
import type { V2CheckField } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "required": null,
  "choices": null,
  "helpText": null,
} satisfies V2CheckField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2CheckField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


