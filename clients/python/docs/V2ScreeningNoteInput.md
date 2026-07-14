# V2ScreeningNoteInput

A note to record on the screening at creation. Scope it to a specific check with `profile_check_id` (links the note to the Check spawned from that ProfileCheck) or to a `check_type`; `profile_check_id` wins when both are given. With neither, the note is recorded against the screening with no check (check_type 'other').

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**note** | **str** |  | 
**profile_check_id** | **UUID** | Links the note to the Check spawned from this ProfileCheck. Wins over check_type. | [optional] 
**check_type** | **str** | Scope the note to a check type. Ignored when profile_check_id is given.  * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [optional] 

## Example

```python
from pescheck.models.v2_screening_note_input import V2ScreeningNoteInput

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningNoteInput from a JSON string
v2_screening_note_input_instance = V2ScreeningNoteInput.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningNoteInput.to_json())

# convert the object into a dict
v2_screening_note_input_dict = v2_screening_note_input_instance.to_dict()
# create an instance of V2ScreeningNoteInput from a dict
v2_screening_note_input_from_dict = V2ScreeningNoteInput.from_dict(v2_screening_note_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


