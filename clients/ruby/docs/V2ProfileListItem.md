# Pescheck::V2ProfileListItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **is_custom** | **Boolean** |  | [optional] |
| **check_types** | **Array&lt;String&gt;** |  | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ProfileListItem.new(
  id: null,
  name: null,
  description: null,
  is_custom: null,
  check_types: null,
  created_at: null,
  updated_at: null
)
```

