# Pescheck::V2ProfileDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **is_custom** | **Boolean** |  | [optional] |
| **checks** | [**Array&lt;V2ProfileCheckEntry&gt;**](V2ProfileCheckEntry.md) |  | [optional][readonly] |
| **total_price** | [**V2Money**](V2Money.md) |  | [optional][readonly] |
| **supported_countries_of_work** | **Array&lt;String&gt;** |  | [optional][readonly] |
| **supported_countries_of_residence** | **Array&lt;String&gt;** |  | [optional][readonly] |
| **candidate_fields** | **Array&lt;Object&gt;** |  | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |

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

