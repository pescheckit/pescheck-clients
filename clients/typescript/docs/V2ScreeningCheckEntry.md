
# V2ScreeningCheckEntry


## Properties

Name | Type
------------ | -------------
`id` | string
`profileCheckId` | string
`checkType` | string
`displayName` | string
`status` | string
`config` | { [key: string]: any; }
`input` | { [key: string]: any; }
`output` | { [key: string]: any; }
`candidateWizardUrl` | string

## Example

```typescript
import type { V2ScreeningCheckEntry } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "profileCheckId": null,
  "checkType": null,
  "displayName": null,
  "status": null,
  "config": null,
  "input": null,
  "output": null,
  "candidateWizardUrl": null,
} satisfies V2ScreeningCheckEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ScreeningCheckEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


