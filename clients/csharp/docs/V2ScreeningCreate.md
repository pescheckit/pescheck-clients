# Pescheck.Client.Model.V2ScreeningCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | **Guid** |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | 
**Checks** | [**List&lt;V2ScreeningCheck&gt;**](V2ScreeningCheck.md) |  | [optional] 
**ScreeningNotes** | [**List&lt;V2ScreeningNoteInput&gt;**](V2ScreeningNoteInput.md) |  | [optional] 
**DivisionId** | **Guid** | Create the screening for this department instead of the token&#39;s own organisation. Omit for the usual case. Same field as on webhook and OAuth application creation. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

