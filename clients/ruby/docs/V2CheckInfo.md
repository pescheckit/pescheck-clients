# Pescheck::V2CheckInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** |  | [readonly] |
| **display_name** | **String** |  | [readonly] |
| **description** | **String** |  | [readonly] |
| **has_config** | **Boolean** |  | [readonly] |
| **is_system_managed** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly] |
| **requires_checks** | **Array&lt;String&gt;** | Other check types this check pulls in automatically when added. | [readonly] |
| **supported_countries_of_work** | **Array&lt;String&gt;** |  | [readonly] |
| **supported_countries_of_residence** | **Array&lt;String&gt;** |  | [readonly] |
| **default_price** | [**V2Money**](V2Money.md) |  | [readonly] |
| **config_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) |  | [readonly] |
| **input_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) |  | [readonly] |
| **candidate_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly] |

## Example

```ruby
require 'pescheck'

instance = Pescheck::V2CheckInfo.new(
  check_type: null,
  display_name: null,
  description: null,
  has_config: null,
  is_system_managed: null,
  requires_checks: null,
  supported_countries_of_work: null,
  supported_countries_of_residence: null,
  default_price: null,
  config_fields: null,
  input_fields: null,
  candidate_fields: null
)
```

