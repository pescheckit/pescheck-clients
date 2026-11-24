//! Contract test: the Rust client against the mock API (see contract/README.md).

use pescheck_client::apis::configuration::Configuration;
use pescheck_client::apis::{
    add_ons_api, checks_api, divisions_api, profiles_api, screenings_api, webhooks_api, Error,
};
use pescheck_client::models::v2_profile_check::CheckType;
use pescheck_client::models::webhook::Events;
use pescheck_client::models::{
    DivisionWrite, PatchedV2ProfilePartialUpdate, V2Candidate, V2ProfileCheck, V2ProfileCreate,
    V2ScreeningCreate, Webhook,
};
use uuid::Uuid;

const ID: &str = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
const EMAIL: &str = "contract@example.invalid";

/// Host comes from PESCHECK_BASE_URL (the client's default base_path).
fn config(token: Option<String>) -> Configuration {
    let mut cfg = Configuration::new();
    cfg.oauth_access_token = token;
    cfg
}

fn authed() -> Configuration {
    config(Some(std::env::var("PESCHECK_ACCESS_TOKEN").expect("PESCHECK_ACCESS_TOKEN")))
}

fn s(v: &str) -> String {
    v.to_string()
}

#[tokio::test]
async fn checks() {
    let cfg = authed();
    checks_api::v2_checks_list(&cfg, Default::default()).await.expect("list checks");
    let params = checks_api::V2ChecksRetrieveParams { check_type: s("id2check") };
    checks_api::v2_checks_retrieve(&cfg, params).await.expect("retrieve check");
}

#[tokio::test]
async fn addons() {
    let cfg = authed();
    add_ons_api::v2_organisations_addons_list(&cfg, Default::default()).await.expect("list add-ons");
    let params = add_ons_api::V2OrganisationsAddonsRetrieveParams { addon: s("api_access"), ..Default::default() };
    add_ons_api::v2_organisations_addons_retrieve(&cfg, params)
        .await
        .expect("retrieve add-on");
}

#[tokio::test]
async fn profiles() {
    let cfg = authed();
    let body = V2ProfileCreate::new(s("Contract test"), vec![V2ProfileCheck::new(CheckType::Id2check)]);
    let params = profiles_api::V2ProfilesCreateParams { v2_profile_create: body };
    profiles_api::v2_profiles_create(&cfg, params).await.expect("create profile");
    profiles_api::v2_profiles_list(&cfg, Default::default()).await.expect("list profiles");
    let params = profiles_api::V2ProfilesRetrieveParams { id: s(ID) };
    profiles_api::v2_profiles_retrieve(&cfg, params).await.expect("retrieve profile");
    let patch = PatchedV2ProfilePartialUpdate { description: Some(s("updated")), ..Default::default() };
    let params = profiles_api::V2ProfilesPartialUpdateParams {
        id: s(ID),
        patched_v2_profile_partial_update: Some(patch),
    };
    profiles_api::v2_profiles_partial_update(&cfg, params)
        .await
        .expect("partially update profile");
}

#[tokio::test]
async fn screenings() {
    let cfg = authed();
    let candidate = V2Candidate::new(s("Contract"), s("Test"), s(EMAIL));
    let body = V2ScreeningCreate::new(Uuid::parse_str(ID).unwrap(), candidate);
    let params = screenings_api::V2ScreeningsCreateParams { v2_screening_create: body };
    screenings_api::v2_screenings_create(&cfg, params).await.expect("create screening");
    screenings_api::v2_screenings_list(&cfg, Default::default()).await.expect("list screenings");
    let params = screenings_api::V2ScreeningsRetrieveParams { id: s(ID) };
    screenings_api::v2_screenings_retrieve(&cfg, params).await.expect("retrieve screening");
    let params = screenings_api::V2ScreeningsDocumentsListParams { id: s(ID), ..Default::default() };
    screenings_api::v2_screenings_documents_list(&cfg, params)
        .await
        .expect("list screening documents");
}

#[tokio::test]
async fn webhooks() {
    let cfg = authed();
    let body = Webhook::new(s("Contract test"), s("https://example.invalid/hook"), vec![Events::ScreeningStatusChanged]);
    let params = webhooks_api::CreateWebhook2Params { webhook: body, ..Default::default() };
    webhooks_api::create_webhook2(&cfg, params).await.expect("create webhook");
    webhooks_api::list_webhooks2(&cfg).await.expect("list webhooks");
}

#[tokio::test]
async fn divisions() {
    let cfg = authed();
    let body = DivisionWrite::new(
        s("Contract test"),
        s("Utrecht"),
        s("Teststraat 1"),
        s("1234AB"),
        s("0301234567"),
        s("Contract Test"),
        s(EMAIL),
        s(EMAIL),
    );
    let params = divisions_api::V2OrganisationsDivisionsCreateParams { division_write: body };
    divisions_api::v2_organisations_divisions_create(&cfg, params).await.expect("create division");
    divisions_api::v2_organisations_divisions_list(&cfg, Default::default())
        .await
        .expect("list divisions");
}

#[tokio::test]
async fn unauthorized() {
    let cfg = config(None);
    match profiles_api::v2_profiles_list(&cfg, Default::default()).await {
        Err(Error::ResponseError(e)) => assert_eq!(e.status.as_u16(), 401),
        other => panic!("list profiles without token: want HTTP 401, got {other:?}"),
    }
}
