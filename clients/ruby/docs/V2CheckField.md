# Pescheck::V2CheckField

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [readonly] |
| **type** | **String** | \&quot;string\&quot; | \&quot;integer\&quot; | \&quot;number\&quot; | \&quot;boolean\&quot; | \&quot;array\&quot; | \&quot;object\&quot; | [readonly] |
| **required** | **Boolean** | Whether the request body must include this field. | [readonly] |
| **choices** | **Array&lt;String&gt;** | Allowed values, or null if the field isn&#39;t constrained to a set. | [readonly] |
| **help_text** | **String** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2CheckField.new(
  name: null,
  type: null,
  required: null,
  choices: null,
  help_text: null
)
```

