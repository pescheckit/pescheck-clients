

# OrganisationAddon

One add-on for one organisation, built from ``addon_service.addon_cards``.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**addon** | [**AddonEnum**](#AddonEnum) | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go |  |
|**name** | **String** |  |  |
|**description** | **String** |  |  |
|**enabled** | **Boolean** | Switched on (and billed) for this organisation. |  |
|**active** | **Boolean** | Usable right now. A division also needs the add-on on its parent organisation. |  |
|**blockedByParent** | **Boolean** | Only the missing add-on on the parent organisation stands in the way. |  |
|**monthlyPrice** | [**AddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. |  |
|**priceIsIndicative** | **Boolean** | The price is a starting price (\&quot;from\&quot;). |  |



## Enum: AddonEnum

| Name | Value |
|---- | -----|
| BRANDED_JOURNEY | &quot;branded_journey&quot; |
| SSO | &quot;sso&quot; |
| API_ACCESS | &quot;api_access&quot; |
| CONNECTED_ATS | &quot;connected_ats&quot; |



