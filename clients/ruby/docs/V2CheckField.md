# Pescheck::V2CheckField

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [readonly] |
| **type** | **String** | \&quot;string\&quot; | \&quot;integer\&quot; | \&quot;number\&quot; | \&quot;boolean\&quot; | \&quot;array\&quot; | \&quot;object\&quot; | [readonly] |
| **required** | **Boolean** | Whether the request body must include this field. | [readonly] |
| **choices** | **Array&lt;Hash&lt;String, Object&gt;&gt;** | Allowed values, or null if the field isn&#39;t constrained to a set. Each choice has \&quot;value\&quot; (what to send), \&quot;label\&quot; (human-readable), and possibly check-specific extras such as \&quot;description\&quot;. | [readonly] |
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

