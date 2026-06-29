# V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **String** |  | [readonly]
**display_name** | **String** |  | [readonly]
**description** | Option<**String**> |  | [readonly]
**has_config** | **bool** |  | [readonly]
**is_system_managed** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly]
**requires_checks** | **Vec<String>** | Other check types this check pulls in automatically when added. | [readonly]
**supported_countries_of_work** | **Vec<String>** |  | [readonly]
**supported_countries_of_residence** | **Vec<String>** |  | [readonly]
**default_price** | Option<[**models::V2Money**](V2Money.md)> |  | [readonly]
**config_fields** | [**Vec<models::V2CheckField>**](V2CheckField.md) |  | [readonly]
**input_fields** | [**Vec<models::V2CheckField>**](V2CheckField.md) |  | [readonly]
**candidate_fields** | [**Vec<models::V2CheckField>**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


