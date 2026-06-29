

# V2ScreeningCheckEntry


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] [readonly] |
|**profileCheckId** | **UUID** |  |  [optional] [readonly] |
|**checkType** | [**CheckTypeEnum**](#CheckTypeEnum) | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck |  [optional] [readonly] |
|**displayName** | **String** |  |  [optional] [readonly] |
|**status** | **String** |  |  [optional] [readonly] |
|**config** | **Map&lt;String, Object&gt;** |  |  [optional] [readonly] |
|**input** | **Map&lt;String, Object&gt;** |  |  [optional] [readonly] |
|**output** | **Map&lt;String, Object&gt;** |  |  [optional] [readonly] |
|**candidateWizardUrl** | **URI** | Deep link to this check&#39;s candidate wizard step. Null when the check has no dedicated candidate step. |  [optional] [readonly] |



## Enum: CheckTypeEnum

| Name | Value |
|---- | -----|
| ADDRESSCHECK | &quot;addresscheck&quot; |
| ADVERSEMEDIACHECK | &quot;adversemediacheck&quot; |
| BIGCHECK | &quot;bigcheck&quot; |
| CRIMINALRECORDSCHECK | &quot;criminalrecordscheck&quot; |
| CRIMINALRECORDSUPLOADCHECK | &quot;criminalrecordsuploadcheck&quot; |
| CUSTOMINTEGRITYCHECK | &quot;customintegritycheck&quot; |
| CVCHECK | &quot;cvcheck&quot; |
| EDRCHECK | &quot;edrcheck&quot; |
| FOCUMCHECK | &quot;focumcheck&quot; |
| ID2CHECK | &quot;id2check&quot; |
| IDCHECK | &quot;idcheck&quot; |
| INTEGRITYCHECK | &quot;integritycheck&quot; |
| OPENHEALTHCARECHECK | &quot;openhealthcarecheck&quot; |
| PERMISSIONCHECK | &quot;permissioncheck&quot; |
| PESCHECKADVERSEMEDIACHECK | &quot;pescheckadversemediacheck&quot; |
| QUALIFICATIONCHECK | &quot;qualificationcheck&quot; |
| RIGHTTOWORKCHECK | &quot;righttoworkcheck&quot; |
| VOGCHECK | &quot;vogcheck&quot; |
| WATCHLIST2CHECK | &quot;watchlist2check&quot; |
| WATCHLISTCHECK | &quot;watchlistcheck&quot; |
| WORKREFERENCECHECK | &quot;workreferencecheck&quot; |
| WORLDWIDECREDITCHECK | &quot;worldwidecreditcheck&quot; |



