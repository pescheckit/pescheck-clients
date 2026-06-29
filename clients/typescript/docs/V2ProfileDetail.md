
# V2ProfileDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`isCustom` | boolean
`checks` | [Array&lt;V2ProfileCheckEntry&gt;](V2ProfileCheckEntry.md)
`totalPrice` | [V2Money](V2Money.md)
`supportedCountriesOfWork` | Array&lt;string&gt;
`supportedCountriesOfResidence` | Array&lt;string&gt;
`candidateFields` | Array&lt;object&gt;
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { V2ProfileDetail } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "isCustom": null,
  "checks": null,
  "totalPrice": null,
  "supportedCountriesOfWork": null,
  "supportedCountriesOfResidence": null,
  "candidateFields": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies V2ProfileDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


