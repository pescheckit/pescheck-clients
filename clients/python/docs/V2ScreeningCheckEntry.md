# V2ScreeningCheckEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [readonly] 
**profile_check_id** | **UUID** |  | [readonly] 
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**display_name** | **str** |  | [readonly] 
**status** | **str** |  | [readonly] 
**config** | **Dict[str, object]** |  | [readonly] 
**input** | **Dict[str, object]** |  | [readonly] 
**output** | **Dict[str, object]** |  | [readonly] 
**candidate_wizard_url** | **str** | Deep link to this check&#39;s candidate wizard step. Null when the check has no dedicated candidate step. | [readonly] 

## Example

```python
from pescheck.models.v2_screening_check_entry import V2ScreeningCheckEntry

# TODO update the JSON string below
json = "{}"
# create an instance of V2ScreeningCheckEntry from a JSON string
v2_screening_check_entry_instance = V2ScreeningCheckEntry.from_json(json)
# print the JSON string representation of the object
print(V2ScreeningCheckEntry.to_json())

# convert the object into a dict
v2_screening_check_entry_dict = v2_screening_check_entry_instance.to_dict()
# create an instance of V2ScreeningCheckEntry from a dict
v2_screening_check_entry_from_dict = V2ScreeningCheckEntry.from_dict(v2_screening_check_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


