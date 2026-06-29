# Pescheck::V2ProfileCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  |  |
| **description** | **String** |  | [optional][default to &#39;&#39;] |
| **checks** | [**Array&lt;V2ProfileCheck&gt;**](V2ProfileCheck.md) |  |  |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ProfileCreate.new(
  name: null,
  description: null,
  checks: null
)
```

