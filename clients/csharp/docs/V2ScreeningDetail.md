# Pescheck.Client.Model.V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** |  | [optional] [readonly] 
**Status** | **string** |  | [optional] [readonly] 
**Profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional] [readonly] 
**Checks** | [**List&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  | [optional] [readonly] 
**CandidateWizardUrl** | **string** | Public wizard URL for the candidate. Null when no check needs candidate input. | [optional] [readonly] 
**DashboardUrl** | **string** | Dashboard URL for this screening. | [optional] [readonly] 
**CreatedAt** | **DateTime** |  | [optional] [readonly] 
**UpdatedAt** | **DateTime** |  | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

