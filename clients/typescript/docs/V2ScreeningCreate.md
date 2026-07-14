
# V2ScreeningCreate


## Properties

Name | Type
------------ | -------------
`profileId` | string
`candidate` | [V2Candidate](V2Candidate.md)
`checks` | [Array&lt;V2ScreeningCheck&gt;](V2ScreeningCheck.md)
`screeningNotes` | [Array&lt;V2ScreeningNoteInput&gt;](V2ScreeningNoteInput.md)

## Example

```typescript
import type { V2ScreeningCreate } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "profileId": null,
  "candidate": null,
  "checks": null,
  "screeningNotes": null,
} satisfies V2ScreeningCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


