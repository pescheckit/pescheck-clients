# Pescheck.Client.Model.V2ScreeningListItem
List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** |  | [readonly] 
**Status** | **string** |  | [optional] 
**Profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**Checks** | [**List&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  | [readonly] 
**CandidateWizardUrl** | **string** |  | [readonly] 
**DashboardUrl** | **string** |  | [readonly] 
**CreatedAt** | **DateTime** |  | [readonly] 
**UpdatedAt** | **DateTime** |  | [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

