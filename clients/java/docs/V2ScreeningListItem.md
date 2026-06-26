

# V2ScreeningListItem

List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [readonly] |
|**status** | **String** |  |  [optional] |
|**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  |
|**candidate** | [**V2Candidate**](V2Candidate.md) |  |  [readonly] |
|**checks** | [**List&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  |  [readonly] |
|**candidateWizardUrl** | **URI** |  |  [readonly] |
|**dashboardUrl** | **URI** |  |  [readonly] |
|**createdAt** | **OffsetDateTime** |  |  [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [readonly] |



