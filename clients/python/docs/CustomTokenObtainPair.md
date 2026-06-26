# CustomTokenObtainPair

Custom JWT serializer that includes organization information in the token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from pescheck.models.custom_token_obtain_pair import CustomTokenObtainPair

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTokenObtainPair from a JSON string
custom_token_obtain_pair_instance = CustomTokenObtainPair.from_json(json)
# print the JSON string representation of the object
print(CustomTokenObtainPair.to_json())

# convert the object into a dict
custom_token_obtain_pair_dict = custom_token_obtain_pair_instance.to_dict()
# create an instance of CustomTokenObtainPair from a dict
custom_token_obtain_pair_from_dict = CustomTokenObtainPair.from_dict(custom_token_obtain_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


