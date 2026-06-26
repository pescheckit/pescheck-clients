//! Minimal end-to-end example: list the check types the Pescheck API supports.
//!
//! Reads PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN from the environment,
//! calls GET /api/v2/checks/, and prints how many check types came back.

use std::process::exit;

use pescheck::apis::{checks_api, configuration::Configuration};

#[tokio::main]
async fn main() {
    let base_path = match std::env::var("PESCHECK_BASE_URL") {
        Ok(v) if !v.is_empty() => v,
        _ => {
            eprintln!("PESCHECK_BASE_URL is not set");
            exit(1);
        }
    };
    let token = match std::env::var("PESCHECK_ACCESS_TOKEN") {
        Ok(v) if !v.is_empty() => v,
        _ => {
            eprintln!("PESCHECK_ACCESS_TOKEN is not set");
            exit(1);
        }
    };

    let mut configuration = Configuration::new();
    configuration.base_path = base_path;
    configuration.oauth_access_token = Some(token);

    match checks_api::v2_checks_list(&configuration, None).await {
        Ok(checks) => {
            println!("E2E OK: {} check types", checks.len());
        }
        Err(err) => {
            eprintln!("E2E FAILED: {err}");
            exit(1);
        }
    }
}
