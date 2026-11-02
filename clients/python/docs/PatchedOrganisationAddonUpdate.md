# PatchedOrganisationAddonUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Switch the add-on on (billed monthly from today) or off (billing stops at the end of the month). | [optional] 

## Example

```python
from pescheck.models.patched_organisation_addon_update import PatchedOrganisationAddonUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedOrganisationAddonUpdate from a JSON string
patched_organisation_addon_update_instance = PatchedOrganisationAddonUpdate.from_json(json)
# print the JSON string representation of the object
print(PatchedOrganisationAddonUpdate.to_json())

# convert the object into a dict
patched_organisation_addon_update_dict = patched_organisation_addon_update_instance.to_dict()
# create an instance of PatchedOrganisationAddonUpdate from a dict
patched_organisation_addon_update_from_dict = PatchedOrganisationAddonUpdate.from_dict(patched_organisation_addon_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


