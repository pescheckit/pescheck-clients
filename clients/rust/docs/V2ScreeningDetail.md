# V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**status** | **String** |  | [readonly]
**profile** | Option<[**models::V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md)> |  | 
**candidate** | [**models::V2Candidate**](V2Candidate.md) |  | [readonly]
**checks** | [**Vec<models::V2ScreeningCheckEntry>**](V2ScreeningCheckEntry.md) |  | [readonly]
**screening_notes** | [**Vec<models::V2ScreeningNote>**](V2ScreeningNote.md) |  | [readonly]
**candidate_wizard_url** | Option<**String**> | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly]
**dashboard_url** | **String** | Dashboard URL for this screening. | [readonly]
**created_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]
**updated_at** | **chrono::DateTime<chrono::FixedOffset>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


