# V2ScreeningNoteInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **String** |  | 
**profile_check_id** | Option<**uuid::Uuid**> | Links the note to the Check spawned from this ProfileCheck. Wins over check_type. | [optional]
**check_type** | Option<**CheckType**> | Scope the note to a check type. Ignored when profile_check_id is given.  * `addresscheck` - addresscheck * `adversemedia2check` - adversemedia2check * `adversemediacheck` - adversemediacheck * `bigcheck` - bigcheck * `criminalrecordscheck` - criminalrecordscheck * `criminalrecordsuploadcheck` - criminalrecordsuploadcheck * `customintegritycheck` - customintegritycheck * `cvcheck` - cvcheck * `edrcheck` - edrcheck * `focumcheck` - focumcheck * `id2check` - id2check * `idcheck` - idcheck * `integritycheck` - integritycheck * `openhealthcarecheck` - openhealthcarecheck * `permissioncheck` - permissioncheck * `pescheckadversemediacheck` - pescheckadversemediacheck * `qualificationcheck` - qualificationcheck * `righttoworkcheck` - righttoworkcheck * `vogcheck` - vogcheck * `watchlist2check` - watchlist2check * `watchlistcheck` - watchlistcheck * `workreferencecheck` - workreferencecheck * `worldwidecreditcheck` - worldwidecreditcheck (enum: addresscheck, adversemedia2check, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, focumcheck, id2check, idcheck, integritycheck, openhealthcarecheck, permissioncheck, pescheckadversemediacheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck, ) | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


