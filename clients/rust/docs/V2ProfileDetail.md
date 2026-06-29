# V2ProfileDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**name** | **String** |  | 
**description** | Option<**String**> |  | 
**is_custom** | Option<**bool**> |  | [optional]
**checks** | [**Vec<models::V2ProfileCheckEntry>**](V2ProfileCheckEntry.md) |  | [readonly]
**total_price** | [**models::V2Money**](V2Money.md) |  | [readonly]
**supported_countries_of_work** | **Vec<String>** |  | [readonly]
**supported_countries_of_residence** | **Vec<String>** |  | [readonly]
**candidate_fields** | **Vec<serde_json::Value>** |  | [readonly]
**created_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]
**updated_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


