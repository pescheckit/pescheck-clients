> **Official Pescheck API client** - part of the [pescheck-clients](https://github.com/pescheckit/pescheck-clients) SDKs.

# @pescheckit/pescheck-client@0.1.0

A TypeScript SDK client for the api.pescheck.io API.

## Usage

First, install the SDK from npm.

```bash
npm install @pescheckit/pescheck-client --save
```

Next, try it out.


```ts
import {
  Configuration,
  AddOnsApi,
} from '@pescheckit/pescheck-client';
import type { V2OrganisationsAddonsListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Act on this division instead of the organisation the token belongs to. (optional)
    divisionId: divisionId_example,
  } satisfies V2OrganisationsAddonsListRequest;

  try {
    const data = await api.v2OrganisationsAddonsList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.pescheck.io*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AddOnsApi* | [**v2OrganisationsAddonsList**](docs/AddOnsApi.md#v2organisationsaddonslist) | **GET** /api/v2/organisations/addons/ | 
*AddOnsApi* | [**v2OrganisationsAddonsPartialUpdate**](docs/AddOnsApi.md#v2organisationsaddonspartialupdate) | **PATCH** /api/v2/organisations/addons/{addon}/ | 
*AddOnsApi* | [**v2OrganisationsAddonsRetrieve**](docs/AddOnsApi.md#v2organisationsaddonsretrieve) | **GET** /api/v2/organisations/addons/{addon}/ | 
*AddOnsApi* | [**v2OrganisationsAddonsUpdate**](docs/AddOnsApi.md#v2organisationsaddonsupdate) | **PUT** /api/v2/organisations/addons/{addon}/ | 
*AuthenticationApi* | [**generateJWTToken2**](docs/AuthenticationApi.md#generatejwttoken2) | **POST** /api/v2/jwt/generate/ | 
*AuthenticationApi* | [**jwtCreate**](docs/AuthenticationApi.md#jwtcreate) | **POST** /api/jwt/ | 
*AuthenticationApi* | [**jwtRefreshCreate**](docs/AuthenticationApi.md#jwtrefreshcreate) | **POST** /api/jwt/refresh/ | 
*ChecksApi* | [**v2ChecksList**](docs/ChecksApi.md#v2checkslist) | **GET** /api/v2/checks/ | 
*ChecksApi* | [**v2ChecksRetrieve**](docs/ChecksApi.md#v2checksretrieve) | **GET** /api/v2/checks/{check_type}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsCreate**](docs/DivisionsApi.md#v2organisationsdivisionscreate) | **POST** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsList**](docs/DivisionsApi.md#v2organisationsdivisionslist) | **GET** /api/v2/organisations/divisions/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsPartialUpdate**](docs/DivisionsApi.md#v2organisationsdivisionspartialupdate) | **PATCH** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsRetrieve**](docs/DivisionsApi.md#v2organisationsdivisionsretrieve) | **GET** /api/v2/organisations/divisions/{id}/ | 
*DivisionsApi* | [**v2OrganisationsDivisionsUpdate**](docs/DivisionsApi.md#v2organisationsdivisionsupdate) | **PUT** /api/v2/organisations/divisions/{id}/ | 
*OAuthApi* | [**createOAuthApplication2**](docs/OAuthApi.md#createoauthapplication2) | **POST** /api/v2/oauth/applications/ | 
*OAuthApi* | [**deleteOAuthApplication2**](docs/OAuthApi.md#deleteoauthapplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ | 
*OAuthApi* | [**listOAuthApplications2**](docs/OAuthApi.md#listoauthapplications2) | **GET** /api/v2/oauth/applications/list/ | 
*ProfilesApi* | [**v2ProfilesCreate**](docs/ProfilesApi.md#v2profilescreate) | **POST** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesDestroy**](docs/ProfilesApi.md#v2profilesdestroy) | **DELETE** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesList**](docs/ProfilesApi.md#v2profileslist) | **GET** /api/v2/profiles/ | 
*ProfilesApi* | [**v2ProfilesPartialUpdate**](docs/ProfilesApi.md#v2profilespartialupdate) | **PATCH** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesRetrieve**](docs/ProfilesApi.md#v2profilesretrieve) | **GET** /api/v2/profiles/{id}/ | 
*ProfilesApi* | [**v2ProfilesUpdate**](docs/ProfilesApi.md#v2profilesupdate) | **PUT** /api/v2/profiles/{id}/ | 
*ScreeningsApi* | [**v2ScreeningsCreate**](docs/ScreeningsApi.md#v2screeningscreate) | **POST** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsDocumentsList**](docs/ScreeningsApi.md#v2screeningsdocumentslist) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
*ScreeningsApi* | [**v2ScreeningsList**](docs/ScreeningsApi.md#v2screeningslist) | **GET** /api/v2/screenings/ | 
*ScreeningsApi* | [**v2ScreeningsRetrieve**](docs/ScreeningsApi.md#v2screeningsretrieve) | **GET** /api/v2/screenings/{id}/ | 
*WebhooksApi* | [**createWebhook2**](docs/WebhooksApi.md#createwebhook2) | **POST** /api/v2/webhooks/ | 
*WebhooksApi* | [**deleteWebhook2**](docs/WebhooksApi.md#deletewebhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
*WebhooksApi* | [**listWebhooks2**](docs/WebhooksApi.md#listwebhooks2) | **GET** /api/v2/webhooks/list/ | 
*WebhooksApi* | [**verifyWebhook2**](docs/WebhooksApi.md#verifywebhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 


### Models

- [AddonPrice](docs/AddonPrice.md)
- [CustomTokenObtainPair](docs/CustomTokenObtainPair.md)
- [DisabledDivision](docs/DisabledDivision.md)
- [DivisionReadOnly](docs/DivisionReadOnly.md)
- [DivisionReadOnlyContactEmail](docs/DivisionReadOnlyContactEmail.md)
- [DivisionWrite](docs/DivisionWrite.md)
- [JWTGeneration](docs/JWTGeneration.md)
- [JWTResponse](docs/JWTResponse.md)
- [OAuthApplication](docs/OAuthApplication.md)
- [OAuthApplicationResponse](docs/OAuthApplicationResponse.md)
- [OrganisationAddon](docs/OrganisationAddon.md)
- [OrganisationAddonUpdate](docs/OrganisationAddonUpdate.md)
- [OrganisationAddonUpdateResult](docs/OrganisationAddonUpdateResult.md)
- [PaginatedDivisionReadOnlyList](docs/PaginatedDivisionReadOnlyList.md)
- [PaginatedV2ProfileListItemList](docs/PaginatedV2ProfileListItemList.md)
- [PaginatedV2ScreeningListItemList](docs/PaginatedV2ScreeningListItemList.md)
- [PatchedDivisionWrite](docs/PatchedDivisionWrite.md)
- [PatchedOrganisationAddonUpdate](docs/PatchedOrganisationAddonUpdate.md)
- [PatchedV2ProfilePartialUpdate](docs/PatchedV2ProfilePartialUpdate.md)
- [TokenRefresh](docs/TokenRefresh.md)
- [V2Candidate](docs/V2Candidate.md)
- [V2CandidateHouseNumber](docs/V2CandidateHouseNumber.md)
- [V2CandidatePostalCode](docs/V2CandidatePostalCode.md)
- [V2CheckField](docs/V2CheckField.md)
- [V2CheckInfo](docs/V2CheckInfo.md)
- [V2Document](docs/V2Document.md)
- [V2DocumentContent](docs/V2DocumentContent.md)
- [V2Money](docs/V2Money.md)
- [V2ProfileCheck](docs/V2ProfileCheck.md)
- [V2ProfileCheckEntry](docs/V2ProfileCheckEntry.md)
- [V2ProfileCreate](docs/V2ProfileCreate.md)
- [V2ProfileDetail](docs/V2ProfileDetail.md)
- [V2ProfileListItem](docs/V2ProfileListItem.md)
- [V2ProfileUpdate](docs/V2ProfileUpdate.md)
- [V2ProfileUpdateCheck](docs/V2ProfileUpdateCheck.md)
- [V2ScreeningCheck](docs/V2ScreeningCheck.md)
- [V2ScreeningCheckEntry](docs/V2ScreeningCheckEntry.md)
- [V2ScreeningCheckListItem](docs/V2ScreeningCheckListItem.md)
- [V2ScreeningCreate](docs/V2ScreeningCreate.md)
- [V2ScreeningDetail](docs/V2ScreeningDetail.md)
- [V2ScreeningDetailOrganisation](docs/V2ScreeningDetailOrganisation.md)
- [V2ScreeningListItem](docs/V2ScreeningListItem.md)
- [V2ScreeningNote](docs/V2ScreeningNote.md)
- [V2ScreeningNoteInput](docs/V2ScreeningNoteInput.md)
- [VerifyWebhook](docs/VerifyWebhook.md)
- [Webhook](docs/Webhook.md)
- [WebhookResponse](docs/WebhookResponse.md)

### Authorization


Authentication schemes defined for the API:
<a id="cookieAuth"></a>
#### cookieAuth


- **Type**: API key
- **API key parameter name**: `__Secure-sessionid`
- **Location**: 
<a id="jwtAuth"></a>
#### jwtAuth


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="oauth2-application"></a>
#### oauth2 application


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - `read:api`: Read access to API
  - `create:api`: Create access to API
  - `update:api`: Update access to API

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Package version: `0.1.0`
- Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
