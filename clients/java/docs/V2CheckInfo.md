

# V2CheckInfo

Everything a client needs to know to use a check type via the API.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkType** | **String** |  |  [optional] [readonly] |
|**displayName** | **String** |  |  [optional] [readonly] |
|**description** | **String** |  |  [optional] [readonly] |
|**hasConfig** | **Boolean** |  |  [optional] [readonly] |
|**isSystemManaged** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. |  [optional] [readonly] |
|**requiresChecks** | **List&lt;String&gt;** | Other check types this check pulls in automatically when added. |  [optional] [readonly] |
|**supportedCountriesOfWork** | **List&lt;String&gt;** |  |  [optional] [readonly] |
|**supportedCountriesOfResidence** | **List&lt;String&gt;** |  |  [optional] [readonly] |
|**defaultPrice** | [**V2Money**](V2Money.md) |  |  [optional] [readonly] |
|**configFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  |  [optional] [readonly] |
|**inputFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  |  [optional] [readonly] |
|**candidateFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). |  [optional] [readonly] |



