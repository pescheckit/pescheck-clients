# PescheckApi.V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**status** | **String** |  | [optional] [readonly] 
**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional] [readonly] 
**checks** | [**[V2ScreeningCheckEntry]**](V2ScreeningCheckEntry.md) |  | [optional] [readonly] 
**candidateWizardUrl** | **String** | Public wizard URL for the candidate. Null when no check needs candidate input. | [optional] [readonly] 
**dashboardUrl** | **String** | Dashboard URL for this screening. | [optional] [readonly] 
**createdAt** | **Date** |  | [optional] [readonly] 
**updatedAt** | **Date** |  | [optional] [readonly] 


