# V2ScreeningListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**status** | Option<**String**> |  | [optional]
**profile** | Option<[**models::V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md)> |  | 
**candidate** | [**models::V2Candidate**](V2Candidate.md) |  | [readonly]
**checks** | [**Vec<models::V2ScreeningCheckListItem>**](V2ScreeningCheckListItem.md) |  | [readonly]
**candidate_wizard_url** | Option<**String**> |  | [readonly]
**dashboard_url** | **String** |  | [readonly]
**created_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]
**updated_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


