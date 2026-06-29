

# V2ScreeningDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] [readonly] |
|**status** | **String** |  |  [optional] [readonly] |
|**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  [optional] |
|**candidate** | [**V2Candidate**](V2Candidate.md) |  |  [optional] [readonly] |
|**checks** | [**List&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  |  [optional] [readonly] |
|**candidateWizardUrl** | **URI** | Public wizard URL for the candidate. Null when no check needs candidate input. |  [optional] [readonly] |
|**dashboardUrl** | **URI** | Dashboard URL for this screening. |  [optional] [readonly] |
|**createdAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [optional] [readonly] |



