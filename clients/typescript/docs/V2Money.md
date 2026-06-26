
# V2Money


## Properties

Name | Type
------------ | -------------
`amount` | string
`currency` | string

## Example

```typescript
import type { V2Money } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "currency": null,
} satisfies V2Money

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2Money
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


