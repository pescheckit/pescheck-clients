# Pescheck::V2ProfileListItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **is_custom** | **Boolean** |  | [optional] |
| **check_types** | **Array&lt;String&gt;** |  | [readonly] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |

## Example

```ruby
require 'pescheck'

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

