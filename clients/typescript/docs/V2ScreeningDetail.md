
# V2ScreeningDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`profile` | [V2ScreeningDetailProfile](V2ScreeningDetailProfile.md)
`candidate` | [V2Candidate](V2Candidate.md)
`checks` | [Array&lt;V2ScreeningCheckEntry&gt;](V2ScreeningCheckEntry.md)
`candidateWizardUrl` | string
`dashboardUrl` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { V2ScreeningDetail } from '@pescheckit/pescheck-client'

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
} satisfies V2ScreeningDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


