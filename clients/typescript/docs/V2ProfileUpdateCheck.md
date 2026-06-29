
# V2ProfileUpdateCheck

Profile update entry. Same shape as create plus optional profile_check_id for in-place update of an existing check. Absent profile_check_id = add new.

## Properties

Name | Type
------------ | -------------
`checkType` | string
`config` | { [key: string]: any; }
`profileCheckId` | string

## Example

```typescript
import type { V2ProfileUpdateCheck } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "checkType": null,
  "config": null,
  "profileCheckId": null,
} satisfies V2ProfileUpdateCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileUpdateCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


