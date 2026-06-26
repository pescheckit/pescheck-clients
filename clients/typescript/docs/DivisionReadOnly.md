
# DivisionReadOnly


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`parent` | string
`createdAt` | Date
`updatedAt` | Date
`city` | string
`address` | string
`postal` | string
`phone` | string
`contactName` | string
`contactEmail` | string
`invoiceEmail` | string
`useParentOnEmail` | boolean
`useParentOnBilling` | boolean
`useParentOnReport` | boolean

## Example

```typescript
import type { DivisionReadOnly } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "parent": null,
  "createdAt": null,
  "updatedAt": null,
  "city": null,
  "address": null,
  "postal": null,
  "phone": null,
  "contactName": null,
  "contactEmail": null,
  "invoiceEmail": null,
  "useParentOnEmail": null,
  "useParentOnBilling": null,
  "useParentOnReport": null,
} satisfies DivisionReadOnly

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DivisionReadOnly
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


