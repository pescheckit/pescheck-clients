# Pescheck::PaginatedDivisionReadOnlyList

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** |  |  |
| **_next** | **String** |  |  |
| **previous** | **String** |  |  |
| **results** | [**Array&lt;DivisionReadOnly&gt;**](DivisionReadOnly.md) |  |  |

## Example

```ruby
require 'pescheck'

instance = Pescheck::PaginatedDivisionReadOnlyList.new(
  count: 1,
  _next: null,
  previous: null,
  results: null
)
```

