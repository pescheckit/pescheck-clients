# OrganisationAddon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addon** | **string** | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go |
**name** | **string** |  |
**description** | **string** |  |
**enabled** | **bool** | Switched on (and billed) for this organisation. |
**active** | **bool** | Usable right now. A division also needs the add-on on its parent organisation. |
**blocked_by_parent** | **bool** | Only the missing add-on on the parent organisation stands in the way. |
**monthly_price** | [**\Pescheck\Client\Model\AddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. |
**price_is_indicative** | **bool** | The price is a starting price (\&quot;from\&quot;). |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
