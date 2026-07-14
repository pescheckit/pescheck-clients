# CustomTokenObtainPair

Custom JWT serializer that scopes the token to one organization.  The organization comes from the optional ``organization_id`` field, or from the user's single organization when the field is absent. Users with access to multiple organizations must pass ``organization_id`` explicitly; the token is never scoped implicitly (e.g. via the last viewed organization, which is mutable web-UI state).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **UUID** | Organization or division ID to scope the token to. Required when your account has access to more than one organization. | [optional] 
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


