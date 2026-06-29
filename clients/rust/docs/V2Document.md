# V2Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | Option<**uuid::Uuid**> |  | [readonly]
**check_type** | **CheckType** | * `addresscheck` - addresscheck * `adversemediacheck` - adversemediacheck * `bigcheck` - bigcheck * `criminalrecordscheck` - criminalrecordscheck * `criminalrecordsuploadcheck` - criminalrecordsuploadcheck * `customintegritycheck` - customintegritycheck * `cvcheck` - cvcheck * `edrcheck` - edrcheck * `focumcheck` - focumcheck * `id2check` - id2check * `idcheck` - idcheck * `integritycheck` - integritycheck * `openhealthcarecheck` - openhealthcarecheck * `permissioncheck` - permissioncheck * `pescheckadversemediacheck` - pescheckadversemediacheck * `qualificationcheck` - qualificationcheck * `righttoworkcheck` - righttoworkcheck * `vogcheck` - vogcheck * `watchlist2check` - watchlist2check * `watchlistcheck` - watchlistcheck * `workreferencecheck` - workreferencecheck * `worldwidecreditcheck` - worldwidecreditcheck (enum: addresscheck, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, focumcheck, id2check, idcheck, integritycheck, openhealthcarecheck, permissioncheck, pescheckadversemediacheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck) | [readonly]
**filename** | **String** |  | [readonly]
**extension** | **String** |  | [readonly]
**content** | [**models::V2DocumentContent**](V2DocumentContent.md) |  | [readonly]
**metadata** | **std::collections::HashMap<String, serde_json::Value>** |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


