

# V2ScreeningCheckEntry


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [readonly] |
|**profileCheckId** | **UUID** |  |  [readonly] |
|**checkType** | **String** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;ibancheck&#x60; - ibancheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck  Known values: addresscheck, adversemedia2check, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, ibancheck, id2check, idcheck, integritycheck, openhealthcarecheck, permissioncheck, pescheckadversemediacheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck. New values may be added; handle unknown values. |  [readonly] |
|**displayName** | **String** |  |  [readonly] |
|**status** | **String** |  |  [readonly] |
|**config** | **Map&lt;String, Object&gt;** |  |  [readonly] |
|**input** | **Map&lt;String, Object&gt;** |  |  [readonly] |
|**output** | **Map&lt;String, Object&gt;** |  |  [readonly] |
|**candidateWizardUrl** | **URI** | Deep link to this check&#39;s candidate wizard step. Null when the check has no dedicated candidate step. |  [readonly] |



