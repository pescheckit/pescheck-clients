# Pescheck.Client.Model.V2CheckInfo
Everything a client needs to know to use a check type via the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckType** | **string** |  | [optional] [readonly] 
**DisplayName** | **string** |  | [optional] [readonly] 
**Description** | **string** |  | [optional] [readonly] 
**HasConfig** | **bool** |  | [optional] [readonly] 
**IsSystemManaged** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [optional] [readonly] 
**RequiresChecks** | **List&lt;string&gt;** | Other check types this check pulls in automatically when added. | [optional] [readonly] 
**SupportedCountriesOfWork** | **List&lt;string&gt;** |  | [optional] [readonly] 
**SupportedCountriesOfResidence** | **List&lt;string&gt;** |  | [optional] [readonly] 
**DefaultPrice** | [**V2Money**](V2Money.md) |  | [optional] [readonly] 
**ConfigFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  | [optional] [readonly] 
**InputFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  | [optional] [readonly] 
**CandidateFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

