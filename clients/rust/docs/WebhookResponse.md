# WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**name** | **String** |  | 
**url** | **String** |  | 
**events** | Option<**serde_json::Value**> |  | [optional][readonly]
**active** | Option<**bool**> |  | [optional]
**verified** | Option<**bool**> |  | [optional][readonly]
**token** | Option<**String**> |  | [optional][readonly]
**organisation_name** | Option<**String**> |  | [optional][readonly]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]
**updated_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


