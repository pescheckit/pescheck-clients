# V2ScreeningCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_id** | **uuid::Uuid** |  | 
**candidate** | [**models::V2Candidate**](V2Candidate.md) |  | 
**checks** | Option<[**Vec<models::V2ScreeningCheck>**](V2ScreeningCheck.md)> |  | [optional]
**screening_notes** | Option<[**Vec<models::V2ScreeningNoteInput>**](V2ScreeningNoteInput.md)> |  | [optional]
**division_id** | Option<**uuid::Uuid**> | Create the screening for this department instead of the token's own organisation. Omit for the usual case. Same field as on webhook and OAuth application creation. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


