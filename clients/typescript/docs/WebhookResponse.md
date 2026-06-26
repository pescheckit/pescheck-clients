
# WebhookResponse

Serializer for webhook responses

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`url` | string
`events` | any
`active` | boolean
`verified` | boolean
`token` | string
`organisationName` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { WebhookResponse } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "url": null,
  "events": null,
  "active": null,
  "verified": null,
  "token": null,
  "organisationName": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies WebhookResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


