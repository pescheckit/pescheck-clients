
# V2ProfileCheck

Input serializer for one `{check_type, config}` profile-check entry.  Used by profile create directly. Subclass with `PARTIAL_CONFIG = True` for screening overrides where only the fields actually being changed should be validated.

## Properties

Name | Type
------------ | -------------
`checkType` | string
`config` | { [key: string]: any; }

## Example

```typescript
import type { V2ProfileCheck } from '@pescheckit/api-client'

// TODO: Update the object below with actual values
const example = {
  "checkType": null,
  "config": null,
} satisfies V2ProfileCheck

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V2ProfileCheck
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


