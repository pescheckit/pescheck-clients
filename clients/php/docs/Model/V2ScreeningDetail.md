# V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly]
**status** | **string** |  | [optional] [readonly]
**profile** | [**\Pescheck\Client\Model\V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional]
**candidate** | [**\Pescheck\Client\Model\V2Candidate**](V2Candidate.md) |  | [optional] [readonly]
**checks** | [**\Pescheck\Client\Model\V2ScreeningCheckEntry[]**](V2ScreeningCheckEntry.md) |  | [optional] [readonly]
**candidate_wizard_url** | **string** | Public wizard URL for the candidate. Null when no check needs candidate input. | [optional] [readonly]
**dashboard_url** | **string** | Dashboard URL for this screening. | [optional] [readonly]
**created_at** | **\DateTime** |  | [optional] [readonly]
**updated_at** | **\DateTime** |  | [optional] [readonly]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
