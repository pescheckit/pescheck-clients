# V2ProfileDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**name** | **String** |  | 
**description** | Option<**String**> |  | 
**is_custom** | Option<**bool**> |  | [optional]
**checks** | Option<[**Vec<models::V2ProfileCheckEntry>**](V2ProfileCheckEntry.md)> |  | [optional][readonly]
**total_price** | Option<[**models::V2Money**](V2Money.md)> |  | [optional][readonly]
**supported_countries_of_work** | Option<**Vec<String>**> |  | [optional][readonly]
**supported_countries_of_residence** | Option<**Vec<String>**> |  | [optional][readonly]
**candidate_fields** | Option<**Vec<serde_json::Value>**> |  | [optional][readonly]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]
**updated_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


