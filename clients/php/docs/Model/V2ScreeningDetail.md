# V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [readonly]
**status** | **string** |  | [readonly]
**profile** | [**\Pescheck\Client\Model\V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |
**candidate** | [**\Pescheck\Client\Model\V2Candidate**](V2Candidate.md) |  | [readonly]
**checks** | [**\Pescheck\Client\Model\V2ScreeningCheckEntry[]**](V2ScreeningCheckEntry.md) |  | [readonly]
**screening_notes** | [**\Pescheck\Client\Model\V2ScreeningNote[]**](V2ScreeningNote.md) |  | [readonly]
**candidate_wizard_url** | **string** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly]
**dashboard_url** | **string** | Dashboard URL for this screening. | [readonly]
**created_at** | **\DateTime** |  | [readonly]
**updated_at** | **\DateTime** |  | [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
