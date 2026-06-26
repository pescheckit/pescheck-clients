
# V2ScreeningCheck

Per-screening entry: identifies a target ProfileCheck (by check_type when unambiguous, or via profile_check_id when the profile has multiple ProfileChecks of the same type) and supplies optional `config` patch + per-check `input`.

## Properties

Name | Type
------------ | -------------
`checkType` | string
`config` | { [key: string]: any; }
`profileCheckId` | string
`input` | any

## Example

```typescript
import type { V2ScreeningCheck } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "checkType": null,
  "config": null,
  "profileCheckId": null,
  "input": null,
} satisfies V2ScreeningCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


