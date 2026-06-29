//! End-to-end CRUD lifecycle test for the Pescheck Rust client.
//!
//! Exercises the full v2 surface against the API and self-cleans where possible:
//!
//!   checks      list -> retrieve one
//!   profiles    create -> retrieve -> patch -> (appears in list) -> delete
//!   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//!   webhooks    create -> list -> delete
//!   divisions   list -> reuse-or-create by name -> patch
//!
//! Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
//!
//! Env:
//!   PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
//!   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
//!   PESCHECK_TEST_EMAIL    candidate email (default "noreply@pescheck.nl")

use std::error::Error;
use std::process::exit;

use pescheck::apis::configuration::Configuration;
use pescheck::apis::{checks_api, divisions_api, profiles_api, screenings_api, webhooks_api};
use pescheck::models::v2_profile_check::CheckType;
use pescheck::models::webhook::Events;
use pescheck::models::{
    DivisionWrite, PatchedDivisionWrite, PatchedV2ProfilePartialUpdate, V2Candidate,
    V2ProfileCheck, V2ProfileCreate, V2ScreeningCreate, Webhook,
};
use uuid::Uuid;

// The division has no delete endpoint, so we reuse a fixed-named one instead of
// creating a new one each run.
const DIVISION_NAME: &str = "E2E CI division";

fn step(msg: &str) {
    println!("  - {msg}");
}

/// Runs the full lifecycle. On the way it stores the created profile id in
/// `profile_id_out` so the caller can best-effort delete it regardless of outcome.
async fn run(
    cfg: &Configuration,
    test_email: &str,
    profile_id_out: &mut Option<String>,
) -> Result<(), Box<dyn Error>> {
    // Profile/webhook names must be unique per run: the API soft-deletes and
    // returns a 500 on a duplicate name.
    let suffix = Uuid::new_v4().simple().to_string()[..8].to_string();

    // --- checks ---
    let check_list = checks_api::v2_checks_list(cfg, None).await?;
    let check_type = check_list
        .first()
        .ok_or("no check types returned")?
        .check_type
        .clone();
    checks_api::v2_checks_retrieve(cfg, &check_type).await?;
    // V2ProfileCheck wants the CheckType enum; the list gives the wire string.
    let check_type_enum: CheckType =
        serde_json::from_value(serde_json::Value::String(check_type.clone()))?;
    step(&format!(
        "checks: {} types, retrieved '{check_type}'",
        check_list.len()
    ));

    // --- profile: create -> retrieve -> patch ---
    let created = profiles_api::v2_profiles_create(
        cfg,
        V2ProfileCreate {
            name: format!("E2E test profile {suffix}"),
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
    profiles_api::v2_profiles_retrieve(cfg, &profile_id).await?;
    profiles_api::v2_profiles_partial_update(
        cfg,
        &profile_id,
        Some(PatchedV2ProfilePartialUpdate {
            name: None,
            description: Some("updated by e2e".to_string()),
        }),
    )
    .await?;
    step(&format!("profile: created+retrieved+patched ({profile_id})"));

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
    screenings_api::v2_screenings_retrieve(cfg, &screening_id).await?;
    screenings_api::v2_screenings_documents_list(cfg, &screening_id, None, None).await?;
    step(&format!(
        "screening: created+retrieved ({screening_id}, status={})",
        screening.status
    ));

    // --- webhook: create -> list -> delete ---
    let hook = webhooks_api::create_webhook2(
        cfg,
        Webhook {
            name: format!("E2E webhook {suffix}"),
            url: "https://example.com/e2e-hook".to_string(),
            events: vec![Events::ScreeningStatusChanged],
            active: None,
            division_id: None,
        },
        None,
        None,
    )
    .await?;
    webhooks_api::list_webhooks2(cfg).await?;
    webhooks_api::delete_webhook2(cfg, &hook.id.to_string()).await?;
    step(&format!("webhook: created+listed+deleted ({})", hook.id));

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
    let (div_id, action) = match found {
        Some(d) => (d.id.to_string(), "reused"),
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
            (
                created_div.id.ok_or("created division has no id")?.to_string(),
                "created",
            )
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
    step(&format!("division: {action}+patched ({div_id})"));

    Ok(())
}

#[tokio::main]
async fn main() {
    let base_url = std::env::var("PESCHECK_BASE_URL").unwrap_or_default();
    let token = std::env::var("PESCHECK_ACCESS_TOKEN").unwrap_or_default();
    let test_email =
        std::env::var("PESCHECK_TEST_EMAIL").unwrap_or_else(|_| "noreply@pescheck.nl".to_string());
    if base_url.is_empty() || token.is_empty() {
        eprintln!("PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set");
        exit(2);
    }

    let mut cfg = Configuration::new();
    cfg.base_path = base_url;
    cfg.oauth_access_token = Some(token);

    let mut profile_id: Option<String> = None;
    let result = run(&cfg, &test_email, &mut profile_id).await;

    // Best-effort cleanup of the profile we created.
    if let Some(pid) = &profile_id {
        let _ = profiles_api::v2_profiles_destroy(&cfg, pid).await;
    }

    match result {
        Ok(()) => println!("E2E CRUD OK"),
        Err(err) => {
            eprintln!("E2E CRUD FAILED: {err}");
            exit(1);
        }
    }
}
