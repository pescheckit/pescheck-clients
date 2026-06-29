# Pescheck::PaginatedV2ProfileListItemList

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** |  |  |
| **_next** | **String** |  |  |
| **previous** | **String** |  |  |
| **results** | [**Array&lt;V2ProfileListItem&gt;**](V2ProfileListItem.md) |  |  |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::PaginatedV2ProfileListItemList.new(
  count: 1,
  _next: null,
  previous: null,
  results: null
)
```

