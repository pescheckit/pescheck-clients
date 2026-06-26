
# V2CheckInfo

Everything a client needs to know to use a check type via the API.

## Properties

Name | Type
------------ | -------------
`checkType` | string
`displayName` | string
`description` | string
`hasConfig` | boolean
`isSystemManaged` | boolean
`requiresChecks` | Array&lt;string&gt;
`supportedCountriesOfWork` | Array&lt;string&gt;
`supportedCountriesOfResidence` | Array&lt;string&gt;
`defaultPrice` | [V2Money](V2Money.md)
`configFields` | [Array&lt;V2CheckField&gt;](V2CheckField.md)
`inputFields` | [Array&lt;V2CheckField&gt;](V2CheckField.md)
`candidateFields` | [Array&lt;V2CheckField&gt;](V2CheckField.md)

## Example

```typescript
import type { V2CheckInfo } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "checkType": null,
  "displayName": null,
  "description": null,
  "hasConfig": null,
  "isSystemManaged": null,
  "requiresChecks": null,
  "supportedCountriesOfWork": null,
  "supportedCountriesOfResidence": null,
  "defaultPrice": null,
  "configFields": null,
  "inputFields": null,
  "candidateFields": null,
} satisfies V2CheckInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2CheckInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


