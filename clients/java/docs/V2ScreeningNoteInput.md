

# V2ScreeningNoteInput

A note to record on the screening at creation. Scope it to a specific check with `profile_check_id` (links the note to the Check spawned from that ProfileCheck) or to a `check_type`; `profile_check_id` wins when both are given. With neither, the note is recorded against the screening with no check (check_type 'other').

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**note** | **String** |  |  |
|**profileCheckId** | **UUID** | Links the note to the Check spawned from this ProfileCheck. Wins over check_type. |  [optional] |
|**checkType** | [**CheckTypeEnum**](#CheckTypeEnum) | Scope the note to a check type. Ignored when profile_check_id is given.  * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck |  [optional] |



## Enum: CheckTypeEnum

| Name | Value |
|---- | -----|
| ADDRESSCHECK | &quot;addresscheck&quot; |
| ADVERSEMEDIA2CHECK | &quot;adversemedia2check&quot; |
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
| EMPTY | &quot;&quot; |



