# Pescheck.Client.Model.V2ScreeningListItem
List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** |  | [optional] [readonly] 
**Status** | **string** |  | [optional] 
**Profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional] [readonly] 
**Checks** | [**List&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  | [optional] [readonly] 
**CandidateWizardUrl** | **string** |  | [optional] [readonly] 
**DashboardUrl** | **string** |  | [optional] [readonly] 
**CreatedAt** | **DateTime** |  | [optional] [readonly] 
**UpdatedAt** | **DateTime** |  | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

