

# V2ProfileUpdate

Replaces the profile - name, description and full checks list. Entries matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**name** | **String** |  |  |
|**description** | **String** |  |  [optional] |
|**checks** | [**List&lt;V2ProfileUpdateCheck&gt;**](V2ProfileUpdateCheck.md) |  |  |



