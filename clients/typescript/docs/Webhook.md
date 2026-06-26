
# Webhook

Serializer for webhook creation/update requests

## Properties

Name | Type
------------ | -------------
`name` | string
`url` | string
`events` | Array&lt;string&gt;
`active` | boolean
`divisionId` | string

## Example

```typescript
import type { Webhook } from '@pescheck/api-client'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "url": null,
  "events": null,
  "active": null,
  "divisionId": null,
} satisfies Webhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Webhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


