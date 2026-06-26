# Pescheck::AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**generate_jwt_token2**](AuthenticationApi.md#generate_jwt_token2) | **POST** /api/v2/jwt/generate/ |  |
| [**jwt_create**](AuthenticationApi.md#jwt_create) | **POST** /api/jwt/ |  |
| [**jwt_refresh_create**](AuthenticationApi.md#jwt_refresh_create) | **POST** /api/jwt/refresh/ |  |


## generate_jwt_token2

> <JWTResponse> generate_jwt_token2(jwt_generation)



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id (defaults to your current org).  For a plain login, use POST /api/jwt/.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AuthenticationApi.new
jwt_generation = Pescheck::JWTGeneration.new({email: 'email_example', password: 'password_example'}) # JWTGeneration | 

begin
  
  result = api_instance.generate_jwt_token2(jwt_generation)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->generate_jwt_token2: #{e}"
end
```

#### Using the generate_jwt_token2_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<JWTResponse>, Integer, Hash)> generate_jwt_token2_with_http_info(jwt_generation)

```ruby
begin
  
  data, status_code, headers = api_instance.generate_jwt_token2_with_http_info(jwt_generation)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <JWTResponse>
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->generate_jwt_token2_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **jwt_generation** | [**JWTGeneration**](JWTGeneration.md) |  |  |

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## jwt_create

> <CustomTokenObtainPair> jwt_create(custom_token_obtain_pair)



Log in with email + password. Returns a JWT pair scoped to your current organization (last viewed, or first available).  For a token scoped to a specific org or division, use POST /api/v2/jwt/generate/.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AuthenticationApi.new
custom_token_obtain_pair = Pescheck::CustomTokenObtainPair.new({email: 'email_example', password: 'password_example'}) # CustomTokenObtainPair | 

begin
  
  result = api_instance.jwt_create(custom_token_obtain_pair)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->jwt_create: #{e}"
end
```

#### Using the jwt_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CustomTokenObtainPair>, Integer, Hash)> jwt_create_with_http_info(custom_token_obtain_pair)

```ruby
begin
  
  data, status_code, headers = api_instance.jwt_create_with_http_info(custom_token_obtain_pair)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CustomTokenObtainPair>
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->jwt_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **custom_token_obtain_pair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md) |  |  |

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json


## jwt_refresh_create

> <TokenRefresh> jwt_refresh_create(token_refresh)



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Examples

```ruby
require 'time'
require 'pescheck'
# setup authorization
Pescheck.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = 'YOUR ACCESS TOKEN'
end

api_instance = Pescheck::AuthenticationApi.new
token_refresh = Pescheck::TokenRefresh.new({access: 'access_example', refresh: 'refresh_example'}) # TokenRefresh | 

begin
  
  result = api_instance.jwt_refresh_create(token_refresh)
  p result
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->jwt_refresh_create: #{e}"
end
```

#### Using the jwt_refresh_create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TokenRefresh>, Integer, Hash)> jwt_refresh_create_with_http_info(token_refresh)

```ruby
begin
  
  data, status_code, headers = api_instance.jwt_refresh_create_with_http_info(token_refresh)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TokenRefresh>
rescue Pescheck::ApiError => e
  puts "Error when calling AuthenticationApi->jwt_refresh_create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **token_refresh** | [**TokenRefresh**](TokenRefresh.md) |  |  |

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

