# V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **string** |  | [optional] [readonly]
**display_name** | **string** |  | [optional] [readonly]
**description** | **string** |  | [optional] [readonly]
**has_config** | **bool** |  | [optional] [readonly]
**is_system_managed** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [optional] [readonly]
**requires_checks** | **string[]** | Other check types this check pulls in automatically when added. | [optional] [readonly]
**supported_countries_of_work** | **string[]** |  | [optional] [readonly]
**supported_countries_of_residence** | **string[]** |  | [optional] [readonly]
**default_price** | [**\Pescheck\Client\Model\V2Money**](V2Money.md) |  | [optional] [readonly]
**config_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) |  | [optional] [readonly]
**input_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) |  | [optional] [readonly]
**candidate_fields** | [**\Pescheck\Client\Model\V2CheckField[]**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
