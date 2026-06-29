

# V2ScreeningListItem

List shape for GET /screenings/. Same candidate as detail; the only thing we slim here is per-check info (status only), since config/input/output are heavy and rarely needed at list time.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] [readonly] |
|**status** | **String** |  |  [optional] |
|**profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  [optional] |
|**candidate** | [**V2Candidate**](V2Candidate.md) |  |  [optional] [readonly] |
|**checks** | [**List&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  |  [optional] [readonly] |
|**candidateWizardUrl** | **URI** |  |  [optional] [readonly] |
|**dashboardUrl** | **URI** |  |  [optional] [readonly] |
|**createdAt** | **OffsetDateTime** |  |  [optional] [readonly] |
|**updatedAt** | **OffsetDateTime** |  |  [optional] [readonly] |



