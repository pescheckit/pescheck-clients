# OAuthApplication

Serializer for OAuth application creation requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name for the OAuth application | 
**client_type** | **str** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional] [default to 'confidential']
**authorization_grant_type** | **str** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional] [default to 'client-credentials']
**redirect_uris** | **str** | Space-separated redirect URIs (optional for client_credentials) | [optional] 
**division_id** | **UUID** | Division ID to create application for (optional) | [optional] 

## Example

```python
from pescheck.models.o_auth_application import OAuthApplication

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthApplication from a JSON string
o_auth_application_instance = OAuthApplication.from_json(json)
# print the JSON string representation of the object
print(OAuthApplication.to_json())

# convert the object into a dict
o_auth_application_dict = o_auth_application_instance.to_dict()
# create an instance of OAuthApplication from a dict
o_auth_application_from_dict = OAuthApplication.from_dict(o_auth_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


