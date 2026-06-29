# V2ScreeningCheckEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**profile_check_id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**check_type** | Option<**CheckType**> | * `addresscheck` - addresscheck * `adversemediacheck` - adversemediacheck * `bigcheck` - bigcheck * `criminalrecordscheck` - criminalrecordscheck * `criminalrecordsuploadcheck` - criminalrecordsuploadcheck * `customintegritycheck` - customintegritycheck * `cvcheck` - cvcheck * `edrcheck` - edrcheck * `focumcheck` - focumcheck * `id2check` - id2check * `idcheck` - idcheck * `integritycheck` - integritycheck * `openhealthcarecheck` - openhealthcarecheck * `permissioncheck` - permissioncheck * `pescheckadversemediacheck` - pescheckadversemediacheck * `qualificationcheck` - qualificationcheck * `righttoworkcheck` - righttoworkcheck * `vogcheck` - vogcheck * `watchlist2check` - watchlist2check * `watchlistcheck` - watchlistcheck * `workreferencecheck` - workreferencecheck * `worldwidecreditcheck` - worldwidecreditcheck (enum: addresscheck, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, focumcheck, id2check, idcheck, integritycheck, openhealthcarecheck, permissioncheck, pescheckadversemediacheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck) | [optional][readonly]
**display_name** | Option<**String**> |  | [optional][readonly]
**status** | Option<**String**> |  | [optional][readonly]
**config** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional][readonly]
**input** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional][readonly]
**output** | Option<**std::collections::HashMap<String, serde_json::Value>**> |  | [optional][readonly]
**candidate_wizard_url** | Option<**String**> | Deep link to this check's candidate wizard step. Null when the check has no dedicated candidate step. | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


