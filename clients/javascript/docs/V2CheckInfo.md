# PescheckApi.V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkType** | **String** |  | [readonly] 
**displayName** | **String** |  | [readonly] 
**description** | **String** |  | [readonly] 
**hasConfig** | **Boolean** |  | [readonly] 
**isSystemManaged** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly] 
**requiresChecks** | **[String]** | Other check types this check pulls in automatically when added. | [readonly] 
**supportedCountriesOfWork** | **[String]** |  | [readonly] 
**supportedCountriesOfResidence** | **[String]** |  | [readonly] 
**defaultPrice** | [**V2Money**](V2Money.md) |  | [readonly] 
**configFields** | [**[V2CheckField]**](V2CheckField.md) |  | [readonly] 
**inputFields** | [**[V2CheckField]**](V2CheckField.md) |  | [readonly] 
**candidateFields** | [**[V2CheckField]**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly] 


