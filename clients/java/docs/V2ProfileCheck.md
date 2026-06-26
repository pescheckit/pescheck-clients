

# V2ProfileCheck

Input serializer for one `{check_type, config}` profile-check entry.  Used by profile create directly. Subclass with `PARTIAL_CONFIG = True` for screening overrides where only the fields actually being changed should be validated.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**checkType** | [**CheckTypeEnum**](#CheckTypeEnum) | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;id2check&#x60; - id2check * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck |  |
|**config** | **Map&lt;String, Object&gt;** |  |  [optional] |



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
| ID2CHECK | &quot;id2check&quot; |
| INTEGRITYCHECK | &quot;integritycheck&quot; |
| OPENHEALTHCARECHECK | &quot;openhealthcarecheck&quot; |
| QUALIFICATIONCHECK | &quot;qualificationcheck&quot; |
| RIGHTTOWORKCHECK | &quot;righttoworkcheck&quot; |
| VOGCHECK | &quot;vogcheck&quot; |
| WATCHLIST2CHECK | &quot;watchlist2check&quot; |
| WATCHLISTCHECK | &quot;watchlistcheck&quot; |
| WORKREFERENCECHECK | &quot;workreferencecheck&quot; |
| WORLDWIDECREDITCHECK | &quot;worldwidecreditcheck&quot; |



