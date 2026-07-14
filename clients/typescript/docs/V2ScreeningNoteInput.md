
# V2ScreeningNoteInput

A note to record on the screening at creation. Scope it to a specific check with `profile_check_id` (links the note to the Check spawned from that ProfileCheck) or to a `check_type`; `profile_check_id` wins when both are given. With neither, the note is recorded against the screening with no check (check_type \'other\').

## Properties

Name | Type
------------ | -------------
`note` | string
`profileCheckId` | string
`checkType` | string

## Example

```typescript
import type { V2ScreeningNoteInput } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "note": null,
  "profileCheckId": null,
  "checkType": null,
} satisfies V2ScreeningNoteInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningNoteInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


