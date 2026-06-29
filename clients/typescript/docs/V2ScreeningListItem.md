
# V2ScreeningListItem

List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`profile` | [V2ScreeningDetailProfile](V2ScreeningDetailProfile.md)
`candidate` | [V2Candidate](V2Candidate.md)
`checks` | [Array&lt;V2ScreeningCheckListItem&gt;](V2ScreeningCheckListItem.md)
`candidateWizardUrl` | string
`dashboardUrl` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { V2ScreeningListItem } from '@pescheckit/pescheck-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "profile": null,
  "candidate": null,
  "checks": null,
  "candidateWizardUrl": null,
  "dashboardUrl": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies V2ScreeningListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


