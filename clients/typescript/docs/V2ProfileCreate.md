
# V2ProfileCreate


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`checks` | [Array&lt;V2ProfileCheck&gt;](V2ProfileCheck.md)

## Example

```typescript
import type { V2ProfileCreate } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "checks": null,
} satisfies V2ProfileCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


