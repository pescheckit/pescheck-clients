# PescheckApi.OrganisationAddonUpdateResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon** | **String** | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go | 
**name** | **String** |  | 
**description** | **String** |  | 
**enabled** | **Boolean** | Switched on (and billed) for this organisation. | 
**active** | **Boolean** | Usable right now. A division also needs the add-on on its parent organisation. | 
**blockedByParent** | **Boolean** | Only the missing add-on on the parent organisation stands in the way. | 
**monthlyPrice** | [**AddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. | 
**priceIsIndicative** | **Boolean** | The price is a starting price (\&quot;from\&quot;). | 
**disabledDivisions** | [**[DisabledDivision]**](DisabledDivision.md) | Divisions that were switched off too, because the add-on was switched off on their parent. | 



## Enum: AddonEnum


* `branded_journey` (value: `"branded_journey"`)

* `sso` (value: `"sso"`)

* `api_access` (value: `"api_access"`)

* `connected_ats` (value: `"connected_ats"`)




