# Pescheck::V2ProfileDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **is_custom** | **Boolean** |  | [optional] |
| **checks** | [**Array&lt;V2ProfileCheckEntry&gt;**](V2ProfileCheckEntry.md) |  | [readonly] |
| **total_price** | [**V2Money**](V2Money.md) |  | [readonly] |
| **supported_countries_of_work** | **Array&lt;String&gt;** |  | [readonly] |
| **supported_countries_of_residence** | **Array&lt;String&gt;** |  | [readonly] |
| **candidate_fields** | **Array&lt;Object&gt;** |  | [readonly] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ProfileDetail.new(
  id: null,
  name: null,
  description: null,
  is_custom: null,
  checks: null,
  total_price: null,
  supported_countries_of_work: null,
  supported_countries_of_residence: null,
  candidate_fields: null,
  created_at: null,
  updated_at: null
)
```

