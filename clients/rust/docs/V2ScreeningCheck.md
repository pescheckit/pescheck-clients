# V2ScreeningCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **CheckType** | * `addresscheck` - addresscheck * `adversemediacheck` - adversemediacheck * `bigcheck` - bigcheck * `criminalrecordscheck` - criminalrecordscheck * `criminalrecordsuploadcheck` - criminalrecordsuploadcheck * `customintegritycheck` - customintegritycheck * `cvcheck` - cvcheck * `edrcheck` - edrcheck * `id2check` - id2check * `integritycheck` - integritycheck * `openhealthcarecheck` - openhealthcarecheck * `qualificationcheck` - qualificationcheck * `righttoworkcheck` - righttoworkcheck * `vogcheck` - vogcheck * `watchlist2check` - watchlist2check * `watchlistcheck` - watchlistcheck * `workreferencecheck` - workreferencecheck * `worldwidecreditcheck` - worldwidecreditcheck (enum: addresscheck, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, id2check, integritycheck, openhealthcarecheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck) | 
**config** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional]
**profile_check_id** | Option<**uuid::Uuid**> | Disambiguator. Use when the profile has multiple ProfileChecks of the same check_type. | [optional]
**input** | Option<**serde_json::Value**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


