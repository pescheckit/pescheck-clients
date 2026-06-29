# V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**status** | Option<**String**> |  | [optional][readonly]
**profile** | Option<[**models::V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md)> |  | [optional]
**candidate** | Option<[**models::V2Candidate**](V2Candidate.md)> |  | [optional][readonly]
**checks** | Option<[**Vec<models::V2ScreeningCheckEntry>**](V2ScreeningCheckEntry.md)> |  | [optional][readonly]
**candidate_wizard_url** | Option<**String**> | Public wizard URL for the candidate. Null when no check needs candidate input. | [optional][readonly]
**dashboard_url** | Option<**String**> | Dashboard URL for this screening. | [optional][readonly]
**created_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]
**updated_at** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


