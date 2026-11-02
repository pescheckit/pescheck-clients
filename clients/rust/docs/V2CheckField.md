# V2CheckField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [readonly]
**r#type** | **String** | \"string\" | \"integer\" | \"number\" | \"boolean\" | \"array\" | \"object\" | [readonly]
**required** | **bool** | Whether the request body must include this field. | [readonly]
**choices** | Option<**Vec<std::collections::HashMap<String, serde_json::Value>>**> | Allowed values, or null if the field isn't constrained to a set. Each choice has \"value\" (what to send), \"label\" (human-readable), and possibly check-specific extras such as \"description\". | [readonly]
**help_text** | Option<**String**> |  | [readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


