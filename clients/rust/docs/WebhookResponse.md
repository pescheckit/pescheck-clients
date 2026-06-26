# WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**name** | **String** |  | 
**url** | **String** |  | 
**events** | Option<**serde_json::Value**> |  | [readonly]
**active** | Option<**bool**> |  | [optional]
**verified** | **bool** |  | [readonly]
**token** | Option<**String**> |  | [readonly]
**organisation_name** | **String** |  | [readonly]
**created_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]
**updated_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


