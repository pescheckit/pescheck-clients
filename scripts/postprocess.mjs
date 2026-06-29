#!/usr/bin/env node
/**
 * Post-generation fixups applied after `openapi-generator batch`.
 *
 * TypeScript (typescript-fetch): the generated `instanceOfXxx(value: object)`
 * type guards check both camelCase and snake_case keys with `in`. For models
 * with many properties this makes TS narrow `value` into a 2^n union and emit
 *   TS2590: Expression produces a union type that is too complex to represent.
 * Typing the guard parameter as `any` stops the narrowing without changing
 * runtime behaviour. Idempotent — safe to re-run after every regeneration.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function patchDir(dir, transform) {
  let count = 0;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".ts")) continue;
    const path = join(dir, file);
    const before = readFileSync(path, "utf8");
    const after = transform(before);
    if (after !== before) {
      writeFileSync(path, after);
      count++;
    }
  }
  return count;
}

// Fix 1 (models): the generated `instanceOfXxx(value: object)` type guards check
// both camelCase and snake_case keys with `in`, which makes TS narrow `value`
// into a 2^n union -> TS2590. Typing the guard parameter as `any` stops the
// narrowing without changing runtime behaviour.
const guards = patchDir(resolve(root, "clients/typescript/src/models"), (s) =>
  s.replace(/\(value: object\): value is /g, "(value: any): value is ")
);

// Fix 2 (apis): for `type: oauth2` security, this generator assigns the raw
// token to the Authorization header WITHOUT a "Bearer " prefix, unlike every
// other client (python/js/rust prepend it). Wrap the assignment so the TS client
// also accepts a raw access token and sends `Authorization: Bearer <token>`.
const auth = patchDir(resolve(root, "clients/typescript/src/apis"), (s) =>
  s.replace(
    /(headerParameters\["Authorization"\] = )(await this\.configuration\.accessToken\("oauth2",[^;]*?\));/g,
    "$1`Bearer ${$2}`;"
  )
);

// Fix 3 (ruby): the generated configuration.rb emits `in: ,` (empty value) for
// the cookieAuth entry in auth_settings. Ruby 3 parses the bare `in` as a method
// call -> NameError at runtime. Give it a valid empty-string value.
let ruby = 0;
const rubyConfig = resolve(root, "clients/ruby/lib/pescheck/configuration.rb");
try {
  const before = readFileSync(rubyConfig, "utf8");
  const after = before.replace(/^(\s*)in: ,$/gm, "$1in: '',");
  if (after !== before) {
    writeFileSync(rubyConfig, after);
    ruby = 1;
  }
} catch {
  /* ruby client not generated */
}

// Fix package metadata URLs (generators default to openapi-generator.tech):
// homepage -> pescheck.io, repository/source/docs -> GitHub. Generators with a
// config option (ruby gemHomepage, python packageUrl, csharp packageProjectUrl)
// already point homepage at pescheck.io; here we add the GitHub links for npm,
// rust and ruby where the manifest supports them.
const REPO_URL = "https://github.com/pescheckit/pescheck-clients";
const HOME_URL = "https://pescheck.io";
let manifests = 0;

for (const dir of ["typescript", "javascript"]) {
  const p = resolve(root, `clients/${dir}/package.json`);
  try {
    const pkg = JSON.parse(readFileSync(p, "utf8"));
    pkg.homepage = HOME_URL;
    pkg.repository = { type: "git", url: `git+${REPO_URL}.git` };
    pkg.bugs = { url: `${REPO_URL}/issues` };
    writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
    manifests++;
  } catch {
    /* not generated */
  }
}

try {
  const p = resolve(root, "clients/rust/Cargo.toml");
  let c = readFileSync(p, "utf8");
  if (!c.includes("homepage =")) {
    c = c.replace(
      /(\nversion = "[^"]*"\n)/,
      `$1homepage = "${HOME_URL}"\nrepository = "${REPO_URL}"\ndocumentation = "${REPO_URL}"\n`
    );
    writeFileSync(p, c);
    manifests++;
  }
} catch {
  /* not generated */
}

try {
  const p = resolve(root, "clients/ruby/pescheck.gemspec");
  let c = readFileSync(p, "utf8");
  if (!c.includes("source_code_uri")) {
    c = c.replace(
      /(\n\s*s\.homepage\s*=.*\n)/,
      `$1  s.metadata = { "source_code_uri" => "${REPO_URL}", "homepage_uri" => "${HOME_URL}" }\n`
    );
    writeFileSync(p, c);
    manifests++;
  }
} catch {
  /* not generated */
}

console.log(
  `postprocess: typescript instanceOf guards relaxed in ${guards} model file(s); ` +
    `Bearer prefix added in ${auth} api file(s); ruby auth_settings fixed in ${ruby} file(s); ` +
    `manifest metadata fixed in ${manifests} file(s)`
);
