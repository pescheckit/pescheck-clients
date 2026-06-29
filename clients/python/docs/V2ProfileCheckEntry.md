# V2ProfileCheckEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [readonly] 
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**display_name** | **str** |  | [readonly] 
**configured_price** | [**V2Money**](V2Money.md) |  | [readonly] 
**config** | **Dict[str, object]** |  | [readonly] 
**input_fields** | **List[object]** |  | [readonly] 
**is_system_managed** | **bool** |  | [readonly] 

## Example

```python
from pescheck.models.v2_profile_check_entry import V2ProfileCheckEntry

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileCheckEntry from a JSON string
v2_profile_check_entry_instance = V2ProfileCheckEntry.from_json(json)
# print the JSON string representation of the object
print(V2ProfileCheckEntry.to_json())

# convert the object into a dict
v2_profile_check_entry_dict = v2_profile_check_entry_instance.to_dict()
# create an instance of V2ProfileCheckEntry from a dict
v2_profile_check_entry_from_dict = V2ProfileCheckEntry.from_dict(v2_profile_check_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


