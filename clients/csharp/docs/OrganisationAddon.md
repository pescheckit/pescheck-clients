# Pescheck.Client.Model.OrganisationAddon
One add-on for one organisation, built from ``addon_service.addon_cards``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addon** | **string** | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**Enabled** | **bool** | Switched on (and billed) for this organisation. | 
**Active** | **bool** | Usable right now. A division also needs the add-on on its parent organisation. | 
**BlockedByParent** | **bool** | Only the missing add-on on the parent organisation stands in the way. | 
**MonthlyPrice** | [**AddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. | 
**PriceIsIndicative** | **bool** | The price is a starting price (\&quot;from\&quot;). | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

