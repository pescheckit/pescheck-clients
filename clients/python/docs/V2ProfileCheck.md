# V2ProfileCheck

Input serializer for one `{check_type, config}` profile-check entry.  Used by profile create directly. Subclass with `PARTIAL_CONFIG = True` for screening overrides where only the fields actually being changed should be validated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_type** | **str** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;id2check&#x60; - id2check * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | 
**config** | **Dict[str, object]** |  | [optional] 

## Example

```python
from pescheck.models.v2_profile_check import V2ProfileCheck

# TODO update the JSON string below
json = "{}"
# create an instance of V2ProfileCheck from a JSON string
v2_profile_check_instance = V2ProfileCheck.from_json(json)
# print the JSON string representation of the object
print(V2ProfileCheck.to_json())

# convert the object into a dict
v2_profile_check_dict = v2_profile_check_instance.to_dict()
# create an instance of V2ProfileCheck from a dict
v2_profile_check_from_dict = V2ProfileCheck.from_dict(v2_profile_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


