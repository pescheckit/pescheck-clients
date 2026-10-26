# PescheckApi.V2ScreeningCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profileId** | **String** |  | 
**candidate** | [**V2Candidate**](V2Candidate.md) |  | 
**checks** | [**[V2ScreeningCheck]**](V2ScreeningCheck.md) |  | [optional] 
**screeningNotes** | [**[V2ScreeningNoteInput]**](V2ScreeningNoteInput.md) |  | [optional] 
**divisionId** | **String** | Create the screening for this department instead of the token&#39;s own organisation. Omit for the usual case. Same field as on webhook and OAuth application creation. | [optional] 


