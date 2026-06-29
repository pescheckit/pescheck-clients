# V2ScreeningCheckEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **uuid::Uuid** |  | [readonly]
**profile_check_id** | Option<**uuid::Uuid**> |  | [readonly]
**check_type** | **CheckType** | * `addresscheck` - addresscheck * `adversemediacheck` - adversemediacheck * `bigcheck` - bigcheck * `criminalrecordscheck` - criminalrecordscheck * `criminalrecordsuploadcheck` - criminalrecordsuploadcheck * `customintegritycheck` - customintegritycheck * `cvcheck` - cvcheck * `edrcheck` - edrcheck * `focumcheck` - focumcheck * `id2check` - id2check * `idcheck` - idcheck * `integritycheck` - integritycheck * `openhealthcarecheck` - openhealthcarecheck * `permissioncheck` - permissioncheck * `pescheckadversemediacheck` - pescheckadversemediacheck * `qualificationcheck` - qualificationcheck * `righttoworkcheck` - righttoworkcheck * `vogcheck` - vogcheck * `watchlist2check` - watchlist2check * `watchlistcheck` - watchlistcheck * `workreferencecheck` - workreferencecheck * `worldwidecreditcheck` - worldwidecreditcheck (enum: addresscheck, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, focumcheck, id2check, idcheck, integritycheck, openhealthcarecheck, permissioncheck, pescheckadversemediacheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck) | [readonly]
**display_name** | **String** |  | [readonly]
**status** | **String** |  | [readonly]
**config** | **std::collections::HashMap<String, serde_json::Value>** |  | [readonly]
**input** | **std::collections::HashMap<String, serde_json::Value>** |  | [readonly]
**output** | **std::collections::HashMap<String, serde_json::Value>** |  | [readonly]
**candidate_wizard_url** | Option<**String**> | Deep link to this check's candidate wizard step. Null when the check has no dedicated candidate step. | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


