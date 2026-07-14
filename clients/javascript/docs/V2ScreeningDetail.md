# PescheckApi.V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**status** | **String** |  | [readonly] 
**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**checks** | [**[V2ScreeningCheckEntry]**](V2ScreeningCheckEntry.md) |  | [readonly] 
**screeningNotes** | [**[V2ScreeningNote]**](V2ScreeningNote.md) |  | [readonly] 
**candidateWizardUrl** | **String** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly] 
**dashboardUrl** | **String** | Dashboard URL for this screening. | [readonly] 
**createdAt** | **Date** |  | [readonly] 
**updatedAt** | **Date** |  | [readonly] 


