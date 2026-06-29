# OAuthApplicationResponse

Serializer for OAuth application responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] [readonly] 
**client_type** | **str** | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | 
**authorization_grant_type** | **str** | * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | 
**created** | **datetime** |  | [optional] [readonly] 
**updated** | **datetime** |  | [optional] [readonly] 

## Example

```python
from pescheck.models.o_auth_application_response import OAuthApplicationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthApplicationResponse from a JSON string
o_auth_application_response_instance = OAuthApplicationResponse.from_json(json)
# print the JSON string representation of the object
print(OAuthApplicationResponse.to_json())

# convert the object into a dict
o_auth_application_response_dict = o_auth_application_response_instance.to_dict()
# create an instance of OAuthApplicationResponse from a dict
o_auth_application_response_from_dict = OAuthApplicationResponse.from_dict(o_auth_application_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


