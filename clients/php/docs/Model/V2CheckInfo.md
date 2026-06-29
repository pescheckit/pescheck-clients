# V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **string** |  | [readonly]
**display_name** | **string** |  | [readonly]
**description** | **string** |  | [readonly]
**has_config** | **bool** |  | [readonly]
**is_system_managed** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly]
**requires_checks** | **string[]** | Other check types this check pulls in automatically when added. | [readonly]
**supported_countries_of_work** | **string[]** |  | [readonly]
**supported_countries_of_residence** | **string[]** |  | [readonly]
**default_price** | [**\Pescheck\Client\Model\V2Money**](V2Money.md) |  | [readonly]
**config_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) |  | [readonly]
**input_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) |  | [readonly]
**candidate_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
