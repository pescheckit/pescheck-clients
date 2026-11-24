

# V2ScreeningCreate


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**profileId** | **UUID** |  |  |
|**candidate** | [**V2Candidate**](V2Candidate.md) |  |  |
|**checks** | [**List&lt;V2ScreeningCheck&gt;**](V2ScreeningCheck.md) |  |  [optional] |
|**screeningNotes** | [**List&lt;V2ScreeningNoteInput&gt;**](V2ScreeningNoteInput.md) |  |  [optional] |
|**divisionId** | **UUID** | Create the screening for this department instead of the token&#39;s own organisation. Omit for the usual case. Same field as on webhook and OAuth application creation. |  [optional] |



