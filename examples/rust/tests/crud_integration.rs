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

use pescheck_client::apis::configuration::Configuration;
use pescheck_client::apis::{checks_api, divisions_api, profiles_api, screenings_api, webhooks_api};
use pescheck_client::models::v2_profile_check::CheckType;
use pescheck_client::models::webhook::Events;
use pescheck_client::models::{
    DivisionWrite, PatchedDivisionWrite, PatchedV2ProfilePartialUpdate, V2Candidate,
    V2ProfileCheck, V2ProfileCreate, V2ScreeningCreate, Webhook,
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
    screenings_api::v2_screenings_documents_list(cfg, &screening_id, None, None).await?;

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
    let hooks = webhooks_api::list_webhooks2(cfg).await?;
    assert!(
        hooks.iter().any(|h| h.id == hook.id),
        "created webhook should appear in list"
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

    Ok(())
}
