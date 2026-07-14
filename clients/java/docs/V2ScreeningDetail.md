

# V2ScreeningDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [readonly] |
|**status** | **String** |  |  [readonly] |
|**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  |
|**candidate** | [**V2Candidate**](V2Candidate.md) |  |  [readonly] |
|**checks** | [**List&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  |  [readonly] |
|**screeningNotes** | [**List&lt;V2ScreeningNote&gt;**](V2ScreeningNote.md) |  |  [readonly] |
|**candidateWizardUrl** | **URI** | Public wizard URL for the candidate. Null when no check needs candidate input. |  [readonly] |
|**dashboardUrl** | **URI** | Dashboard URL for this screening. |  [readonly] |
|**createdAt** | **OffsetDateTime** |  |  [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [readonly] |



