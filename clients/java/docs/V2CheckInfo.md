

# V2CheckInfo

Everything a client needs to know to use a check type via the API.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkType** | **String** |  |  [readonly] |
|**displayName** | **String** |  |  [readonly] |
|**description** | **String** |  |  [readonly] |
|**hasConfig** | **Boolean** |  |  [readonly] |
|**isSystemManaged** | **Boolean** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. |  [readonly] |
|**requiresChecks** | **List&lt;String&gt;** | Other check types this check pulls in automatically when added. |  [readonly] |
|**supportedCountriesOfWork** | **List&lt;String&gt;** |  |  [readonly] |
|**supportedCountriesOfResidence** | **List&lt;String&gt;** |  |  [readonly] |
|**defaultPrice** | [**V2Money**](V2Money.md) |  |  [readonly] |
|**configFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  |  [readonly] |
|**inputFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) |  |  [readonly] |
|**candidateFields** | [**List&lt;V2CheckField&gt;**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). |  [readonly] |



