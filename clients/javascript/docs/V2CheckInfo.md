# PescheckApi.V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkType** | **String** |  | [optional] [readonly] 
**displayName** | **String** |  | [optional] [readonly] 
**description** | **String** |  | [optional] [readonly] 
**hasConfig** | **Boolean** |  | [optional] [readonly] 
**isSystemManaged** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [optional] [readonly] 
**requiresChecks** | **[String]** | Other check types this check pulls in automatically when added. | [optional] [readonly] 
**supportedCountriesOfWork** | **[String]** |  | [optional] [readonly] 
**supportedCountriesOfResidence** | **[String]** |  | [optional] [readonly] 
**defaultPrice** | [**V2Money**](V2Money.md) |  | [optional] [readonly] 
**configFields** | [**[V2CheckField]**](V2CheckField.md) |  | [optional] [readonly] 
**inputFields** | [**[V2CheckField]**](V2CheckField.md) |  | [optional] [readonly] 
**candidateFields** | [**[V2CheckField]**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [optional] [readonly] 


