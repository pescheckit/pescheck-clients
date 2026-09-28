# OrganisationAddonUpdateResult

One add-on for one organisation, built from ``addon_service.addon_cards``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon** | **str** | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go | 
**name** | **str** |  | 
**description** | **str** |  | 
**enabled** | **bool** | Switched on (and billed) for this organisation. | 
**active** | **bool** | Usable right now. A division also needs the add-on on its parent organisation. | 
**blocked_by_parent** | **bool** | Only the missing add-on on the parent organisation stands in the way. | 
**monthly_price** | [**AddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. | 
**price_is_indicative** | **bool** | The price is a starting price (\&quot;from\&quot;). | 
**disabled_divisions** | [**List[DisabledDivision]**](DisabledDivision.md) | Divisions that were switched off too, because the add-on was switched off on their parent. | 

## Example

```python
from pescheck.models.organisation_addon_update_result import OrganisationAddonUpdateResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationAddonUpdateResult from a JSON string
organisation_addon_update_result_instance = OrganisationAddonUpdateResult.from_json(json)
# print the JSON string representation of the object
print(OrganisationAddonUpdateResult.to_json())

# convert the object into a dict
organisation_addon_update_result_dict = organisation_addon_update_result_instance.to_dict()
# create an instance of OrganisationAddonUpdateResult from a dict
organisation_addon_update_result_from_dict = OrganisationAddonUpdateResult.from_dict(organisation_addon_update_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


