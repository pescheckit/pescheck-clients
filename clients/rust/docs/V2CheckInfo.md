# V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | Option<**String**> |  | [optional][readonly]
**display_name** | Option<**String**> |  | [optional][readonly]
**description** | Option<**String**> |  | [optional][readonly]
**has_config** | Option<**bool**> |  | [optional][readonly]
**is_system_managed** | Option<**bool**> | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [optional][readonly]
**requires_checks** | Option<**Vec<String>**> | Other check types this check pulls in automatically when added. | [optional][readonly]
**supported_countries_of_work** | Option<**Vec<String>**> |  | [optional][readonly]
**supported_countries_of_residence** | Option<**Vec<String>**> |  | [optional][readonly]
**default_price** | Option<[**models::V2Money**](V2Money.md)> |  | [optional][readonly]
**config_fields** | Option<[**Vec<models::V2CheckField>**](V2CheckField.md)> |  | [optional][readonly]
**input_fields** | Option<[**Vec<models::V2CheckField>**](V2CheckField.md)> |  | [optional][readonly]
**candidate_fields** | Option<[**Vec<models::V2CheckField>**](V2CheckField.md)> | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


