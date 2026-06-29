//! End-to-end CRUD integration test for the Pescheck Rust client.
//!
//! Runs the full v2 lifecycle against the real API (no mocks) using an OAuth2
//! access token from the environment, mirroring `src/bin/crud_lifecycle.rs`:
//!
//!   checks      list (non-empty) -> retrieve one
//!   profiles    create -> retrieve -> patch -> (appears in list) -> delete
//!   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//!   webhooks    create -> list -> delete
//!   divisions   list -> reuse-or-create by name -> patch
//!
//! Env:
//!   PESCHECK_BASE_URL      default https://api-staging.pescheck.io
//!   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
//!   PESCHECK_TEST_EMAIL    candidate email (default "noreply@pescheck.nl")
//!
//! With no PESCHECK_ACCESS_TOKEN the test returns early (passes), so CI stays
//! green without credentials.

use pescheck_client::apis;
use pescheck_client::apis::configuration::Configuration;
use pescheck_client::apis::{checks_api, divisions_api, profiles_api, screenings_api, webhooks_api};
use pescheck_client::models::v2_profile_check::CheckType;
use pescheck_client::models::webhook::Events;
use pescheck_client::models::{
    DivisionWrite, PatchedDivisionWrite, PatchedV2ProfilePartialUpdate, V2Candidate,
    V2ProfileCheck, V2ProfileCreate, V2ProfileUpdate, V2ProfileUpdateCheck, V2ScreeningCreate,
    Webhook,
};
use uuid::Uuid;

// The division has no delete endpoint, so we reuse a fixed-named one instead of
// creating a new one each run.
const DIVISION_NAME: &str = "E2E CI division";

#[tokio::test]
async fn crud_lifecycle() {
    let base_url = std::env::var("PESCHECK_BASE_URL")
        .unwrap_or_else(|_| "https://api-staging.pescheck.io".to_string());
    let token = std::env::var("PESCHECK_ACCESS_TOKEN").unwrap_or_default();
    let test_email =
        std::env::var("PESCHECK_TEST_EMAIL").unwrap_or_else(|_| "noreply@pescheck.nl".to_string());

    if token.is_empty() {
        eprintln!(
            "PESCHECK_ACCESS_TOKEN not set; skipping live CRUD integration test (returning OK)"
        );
        return;
    }

    let mut cfg = Configuration::new();
    cfg.base_path = base_url;
    cfg.oauth_access_token = Some(token);

    // Track the created profile so we can clean it up even if an assertion fails.
    let mut profile_id: Option<String> = None;
    let result = run_lifecycle(&cfg, &test_email, &mut profile_id).await;

    // Best-effort cleanup of the profile we created.
    if let Some(pid) = &profile_id {
        let _ = profiles_api::v2_profiles_destroy(&cfg, pid).await;
    }

    result.expect("CRUD lifecycle failed");
}

async fn run_lifecycle(
    cfg: &Configuration,
    test_email: &str,
    profile_id_out: &mut Option<String>,
) -> Result<(), Box<dyn std::error::Error>> {
    // Profile/webhook names must be unique per run: the API soft-deletes and
    // returns a 500 on a duplicate name.
    let suffix = Uuid::new_v4().simple().to_string()[..8].to_string();

    // --- checks: list (non-empty) -> retrieve one ---
    let check_list = checks_api::v2_checks_list(cfg, None).await?;
    assert!(!check_list.is_empty(), "checks list should be non-empty");
    let check_type = check_list[0].check_type.clone();
    checks_api::v2_checks_retrieve(cfg, &check_type).await?;
    // V2ProfileCheck wants the CheckType enum; the list gives the wire string.
    let check_type_enum: CheckType =
        serde_json::from_value(serde_json::Value::String(check_type.clone()))?;

    // --- profile: create -> retrieve -> patch -> in list -> (delete at end) ---
    let profile_name = format!("E2E test profile {suffix}");
    let created = profiles_api::v2_profiles_create(
        cfg,
        V2ProfileCreate {
            name: profile_name.clone(),
            description: Some("created by e2e".to_string()),
            checks: vec![V2ProfileCheck {
                check_type: check_type_enum,
                config: None,
            }],
        },
    )
    .await?;
    let profile_uuid = created.id;
    let profile_id = profile_uuid.to_string();
    *profile_id_out = Some(profile_id.clone());

    let retrieved = profiles_api::v2_profiles_retrieve(cfg, &profile_id).await?;
    assert_eq!(retrieved.id, profile_uuid, "retrieved profile id mismatch");
    assert_eq!(retrieved.name, profile_name, "retrieved profile name mismatch");

    let patched = profiles_api::v2_profiles_partial_update(
        cfg,
        &profile_id,
        Some(PatchedV2ProfilePartialUpdate {
            name: None,
            description: Some("updated by e2e".to_string()),
        }),
    )
    .await?;
    assert_eq!(
        patched.description,
        Some("updated by e2e".to_string()),
        "patched profile description not applied"
    );

    // PUT (full replace) the profile: renames it and rewrites the checks list.
    // The update-check enum is a distinct type from the create-check enum, so
    // rebuild it from the same wire string.
    let update_check_type: pescheck_client::models::v2_profile_update_check::CheckType =
        serde_json::from_value(serde_json::Value::String(check_type.clone()))?;
    // Reference the existing check by its profile_check_id so the PUT updates it
    // in place rather than trying to add a duplicate of the same type.
    let existing_check_id = patched.checks.first().map(|c| c.id);
    let put_name = format!("E2E test profile {suffix} v2");
    let put_updated = profiles_api::v2_profiles_update(
        cfg,
        &profile_id,
        V2ProfileUpdate {
            name: put_name.clone(),
            description: Some("put-updated by e2e".to_string()),
            checks: vec![V2ProfileUpdateCheck {
                check_type: update_check_type,
                config: None,
                profile_check_id: existing_check_id,
            }],
        },
    )
    .await?;
    assert_eq!(put_updated.name, put_name, "PUT profile name not applied");
    assert_eq!(
        put_updated.description,
        Some("put-updated by e2e".to_string()),
        "PUT profile description not applied"
    );

    let profiles = profiles_api::v2_profiles_list(cfg, None, None, None, None, None, None, None)
        .await?
        .results;
    assert!(
        profiles.iter().any(|p| p.id == profile_uuid),
        "created profile should appear in list"
    );

    // --- screening: create -> retrieve -> documents ---
    let screening = screenings_api::v2_screenings_create(
        cfg,
        V2ScreeningCreate {
            profile_id: profile_uuid,
            candidate: Box::new(V2Candidate {
                first_name: "E2E".to_string(),
                last_name: "Tester".to_string(),
                email: test_email.to_string(),
                ..Default::default()
            }),
            checks: None,
        },
    )
    .await?;
    let screening_id = screening.id.to_string();
    assert!(
        !screening.status.is_empty(),
        "screening should have a status"
    );

    let retrieved_screening = screenings_api::v2_screenings_retrieve(cfg, &screening_id).await?;
    assert_eq!(
        retrieved_screening.id, screening.id,
        "retrieved screening id mismatch"
    );
    assert_eq!(
        retrieved_screening.candidate.email, test_email,
        "retrieved screening candidate email mismatch"
    );
    screenings_api::v2_screenings_documents_list(cfg, &screening_id, None, None).await?;

    // List screenings (trailing args are page/page_size/paginate) and confirm
    // the one we just created shows up.
    let screening_list = screenings_api::v2_screenings_list(cfg, None, None, None)
        .await?
        .results;
    assert!(
        !screening_list.is_empty(),
        "screenings list should be non-empty after creating one"
    );
    assert!(
        screening_list.iter().any(|s| s.id == screening.id),
        "created screening should appear in list"
    );

    // --- webhook: create -> list -> delete ---
    let hook = webhooks_api::create_webhook2(
        cfg,
        Webhook {
            name: format!("E2E webhook {suffix}"),
            url: format!("https://example.com/e2e-hook-{suffix}"),
            events: vec![Events::ScreeningStatusChanged],
            active: None,
            division_id: None,
        },
        None,
        None,
    )
    .await?;
    let hook_url = format!("https://example.com/e2e-hook-{suffix}");
    assert_eq!(hook.url, hook_url, "created webhook url mismatch");
    assert!(
        hook.events.is_some(),
        "created webhook should report its events"
    );
    let hooks = webhooks_api::list_webhooks2(cfg).await?;
    let listed = hooks
        .iter()
        .find(|h| h.id == hook.id)
        .expect("created webhook should appear in list");
    assert_eq!(listed.url, hook_url, "listed webhook url mismatch");
    assert!(
        listed.events.is_some(),
        "listed webhook should report its events"
    );
    webhooks_api::delete_webhook2(cfg, &hook.id.to_string()).await?;

    // --- division: list -> reuse-or-create -> patch ---
    let existing = divisions_api::v2_organisations_divisions_list(cfg, None, None, None)
        .await?
        .results;
    let found = existing.iter().find(|d| {
        d.name
            .as_ref()
            .and_then(|o| o.as_ref())
            .map(|name| name == DIVISION_NAME)
            .unwrap_or(false)
    });
    let div_id = match found {
        Some(d) => d.id.to_string(),
        None => {
            let created_div = divisions_api::v2_organisations_divisions_create(
                cfg,
                DivisionWrite {
                    id: None,
                    name: DIVISION_NAME.to_string(),
                    city: "Amsterdam".to_string(),
                    address: "Teststraat 1".to_string(),
                    postal: "1011AA".to_string(),
                    phone: "+31200000000".to_string(),
                    contact_name: "E2E".to_string(),
                    contact_email: "e2e@example.com".to_string(),
                    invoice_email: "e2e@example.com".to_string(),
                    use_parent_on_email: None,
                    use_parent_on_billing: None,
                    use_parent_on_report: None,
                },
            )
            .await?;
            created_div
                .id
                .ok_or("created division has no id")?
                .to_string()
        }
    };
    divisions_api::v2_organisations_divisions_partial_update(
        cfg,
        &div_id,
        Some(PatchedDivisionWrite {
            city: Some("Rotterdam".to_string()),
            ..Default::default()
        }),
    )
    .await?;

    // PUT (full replace) the division, then GET it back and assert the change
    // landed and the name is unchanged.
    divisions_api::v2_organisations_divisions_update(
        cfg,
        &div_id,
        DivisionWrite {
            id: None,
            name: DIVISION_NAME.to_string(),
            city: "Utrecht".to_string(),
            address: "Teststraat 1".to_string(),
            postal: "1011AA".to_string(),
            phone: "+31200000000".to_string(),
            contact_name: "E2E".to_string(),
            contact_email: "e2e@example.com".to_string(),
            invoice_email: "e2e@example.com".to_string(),
            use_parent_on_email: None,
            use_parent_on_billing: None,
            use_parent_on_report: None,
        },
    )
    .await?;

    let div = divisions_api::v2_organisations_divisions_retrieve(cfg, &div_id).await?;
    assert_eq!(div.id.to_string(), div_id, "retrieved division id mismatch");
    assert_eq!(
        div.name.flatten(),
        Some(DIVISION_NAME.to_string()),
        "retrieved division name mismatch"
    );
    assert_eq!(
        div.city.flatten(),
        Some("Utrecht".to_string()),
        "PUT division city not applied"
    );

    Ok(())
}

fn base_url() -> String {
    std::env::var("PESCHECK_BASE_URL")
        .unwrap_or_else(|_| "https://api-staging.pescheck.io".to_string())
}

fn skip_without_token() -> bool {
    if std::env::var("PESCHECK_ACCESS_TOKEN")
        .unwrap_or_default()
        .is_empty()
    {
        eprintln!("PESCHECK_ACCESS_TOKEN not set; skipping live negative test (returning OK)");
        return true;
    }
    false
}

/// A bogus token must be rejected with a 401, surfaced as `Error::ResponseError`.
#[tokio::test]
async fn unauthorized_returns_401() {
    if skip_without_token() {
        return;
    }

    let mut cfg = Configuration::new();
    cfg.base_path = base_url();
    cfg.oauth_access_token = Some("invalid".to_string());

    let err = checks_api::v2_checks_list(&cfg, None)
        .await
        .expect_err("expected an error from an unauthorized request");
    match err {
        apis::Error::ResponseError(content) => {
            assert_eq!(
                content.status.as_u16(),
                401,
                "expected 401 Unauthorized, got {} (body: {})",
                content.status,
                content.content
            );
        }
        other => panic!("expected Error::ResponseError, got {other:?}"),
    }
}

/// Retrieving a non-existent profile must yield a 404, surfaced as
/// `Error::ResponseError`.
#[tokio::test]
async fn retrieve_missing_profile_returns_404() {
    if skip_without_token() {
        return;
    }

    let mut cfg = Configuration::new();
    cfg.base_path = base_url();
    cfg.oauth_access_token = Some(std::env::var("PESCHECK_ACCESS_TOKEN").unwrap_or_default());

    let random_id = Uuid::new_v4().to_string();
    let err = profiles_api::v2_profiles_retrieve(&cfg, &random_id)
        .await
        .expect_err("expected an error retrieving a random profile id");
    match err {
        apis::Error::ResponseError(content) => {
            assert_eq!(
                content.status.as_u16(),
                404,
                "expected 404 Not Found, got {} (body: {})",
                content.status,
                content.content
            );
        }
        other => panic!("expected Error::ResponseError, got {other:?}"),
    }
}
