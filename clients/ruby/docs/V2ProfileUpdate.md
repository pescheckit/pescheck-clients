# Pescheck::V2ProfileUpdate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional][default to &#39;&#39;] |
| **checks** | [**Array&lt;V2ProfileUpdateCheck&gt;**](V2ProfileUpdateCheck.md) |  |  |

## Example

```ruby
require 'pescheck'

instance = Pescheck::V2ProfileUpdate.new(
  name: null,
  description: null,
  checks: null
)
```

