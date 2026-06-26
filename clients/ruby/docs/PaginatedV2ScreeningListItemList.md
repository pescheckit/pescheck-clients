# Pescheck::PaginatedV2ScreeningListItemList

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** |  |  |
| **_next** | **String** |  |  |
| **previous** | **String** |  |  |
| **results** | [**Array&lt;V2ScreeningListItem&gt;**](V2ScreeningListItem.md) |  |  |

## Example

```ruby
require 'pescheck'

instance = Pescheck::PaginatedV2ScreeningListItemList.new(
  count: 1,
  _next: null,
  previous: null,
  results: null
)
```

