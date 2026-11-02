# OrganisationAddonUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Switch the add-on on (billed monthly from today) or off (billing stops at the end of the month). | 

## Example

```python
from pescheck.models.organisation_addon_update import OrganisationAddonUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationAddonUpdate from a JSON string
organisation_addon_update_instance = OrganisationAddonUpdate.from_json(json)
# print the JSON string representation of the object
print(OrganisationAddonUpdate.to_json())

# convert the object into a dict
organisation_addon_update_dict = organisation_addon_update_instance.to_dict()
# create an instance of OrganisationAddonUpdate from a dict
organisation_addon_update_from_dict = OrganisationAddonUpdate.from_dict(organisation_addon_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


