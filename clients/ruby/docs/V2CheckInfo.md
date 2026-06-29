# Pescheck::V2CheckInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_type** | **String** |  | [optional][readonly] |
| **display_name** | **String** |  | [optional][readonly] |
| **description** | **String** |  | [optional][readonly] |
| **has_config** | **Boolean** |  | [optional][readonly] |
| **is_system_managed** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [optional][readonly] |
| **requires_checks** | **Array&lt;String&gt;** | Other check types this check pulls in automatically when added. | [optional][readonly] |
| **supported_countries_of_work** | **Array&lt;String&gt;** |  | [optional][readonly] |
| **supported_countries_of_residence** | **Array&lt;String&gt;** |  | [optional][readonly] |
| **default_price** | [**V2Money**](V2Money.md) |  | [optional][readonly] |
| **config_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) |  | [optional][readonly] |
| **input_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) |  | [optional][readonly] |
| **candidate_fields** | [**Array&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [optional][readonly] |

## Example

```ruby
require 'pescheck-client'

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

