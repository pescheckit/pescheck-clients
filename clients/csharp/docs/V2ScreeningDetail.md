# Pescheck.Client.Model.V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** |  | [readonly] 
**Status** | **string** |  | [readonly] 
**Profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**Checks** | [**List&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  | [readonly] 
**ScreeningNotes** | [**List&lt;V2ScreeningNote&gt;**](V2ScreeningNote.md) |  | [readonly] 
**CandidateWizardUrl** | **string** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly] 
**DashboardUrl** | **string** | Dashboard URL for this screening. | [readonly] 
**CreatedAt** | **DateTime** |  | [readonly] 
**UpdatedAt** | **DateTime** |  | [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

