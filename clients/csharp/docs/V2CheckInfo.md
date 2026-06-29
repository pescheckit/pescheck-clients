# Pescheck.Client.Model.V2CheckInfo
Everything a client needs to know to use a check type via the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckType** | **string** |  | [readonly] 
**DisplayName** | **string** |  | [readonly] 
**Description** | **string** |  | [readonly] 
**HasConfig** | **bool** |  | [readonly] 
**IsSystemManaged** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly] 
**RequiresChecks** | **List&lt;string&gt;** | Other check types this check pulls in automatically when added. | [readonly] 
**SupportedCountriesOfWork** | **List&lt;string&gt;** |  | [readonly] 
**SupportedCountriesOfResidence** | **List&lt;string&gt;** |  | [readonly] 
**DefaultPrice** | [**V2Money**](V2Money.md) |  | [readonly] 
**ConfigFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  | [readonly] 
**InputFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  | [readonly] 
**CandidateFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

