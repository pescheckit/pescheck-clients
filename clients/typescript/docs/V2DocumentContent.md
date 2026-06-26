
# V2DocumentContent

How the file is delivered. `type` is the discriminator; today it is always `\"base64\"` and `data` holds the encoded bytes. Other delivery types may be added later without breaking this contract.

## Properties

Name | Type
------------ | -------------
`type` | string
`data` | string

## Example

```typescript
import type { V2DocumentContent } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "data": null,
} satisfies V2DocumentContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2DocumentContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


