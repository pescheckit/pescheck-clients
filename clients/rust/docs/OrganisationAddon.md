# OrganisationAddon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon** | **Addon** | Add-on identifier, used in the URL.  * `branded_journey` - Branded Journey * `sso` - Single Sign-On (SSO) * `api_access` - API Access * `connected_ats` - Connected ATS - Click & Go (enum: branded_journey, sso, api_access, connected_ats) | 
**name** | **String** |  | 
**description** | **String** |  | 
**enabled** | **bool** | Switched on (and billed) for this organisation. | 
**active** | **bool** | Usable right now. A division also needs the add-on on its parent organisation. | 
**blocked_by_parent** | **bool** | Only the missing add-on on the parent organisation stands in the way. | 
**monthly_price** | Option<[**models::AddonPrice**](AddonPrice.md)> | What this organisation pays per month; the division price for a division. Null when unpriced. | 
**price_is_indicative** | **bool** | The price is a starting price (\"from\"). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


