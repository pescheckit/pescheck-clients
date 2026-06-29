#!/usr/bin/env node
/**
 * Produce a v2-only OpenAPI spec from the upstream snapshot.
 *
 *  - Keeps only paths under /api/v2/ plus the unversioned login endpoints
 *    (/api/jwt/, /api/jwt/refresh/) so generated clients can still authenticate.
 *  - Drops every other path (notably all /api/v1/*).
 *  - Prunes components that are no longer reachable from the surviving paths,
 *    so v1-only models are not generated. securitySchemes are always kept.
 *
 * Usage: node scripts/filter-spec.mjs [inputPath] [outputPath]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import yaml from "js-yaml";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const inputPath = process.argv[2] ?? resolve(root, "spec/openapi.yaml");
const outputPath = process.argv[3] ?? resolve(root, "spec/openapi.v2.yaml");

const KEEP_PREFIXES = ["/api/v2/"];
const KEEP_EXACT = ["/api/jwt/", "/api/jwt/refresh/"];

const doc = yaml.load(readFileSync(inputPath, "utf8"));

// 1. Filter paths.
const keptPaths = {};
for (const [path, item] of Object.entries(doc.paths ?? {})) {
  const keep = KEEP_EXACT.includes(path) || KEEP_PREFIXES.some((p) => path.startsWith(p));
  if (keep) keptPaths[path] = item;
}
const droppedCount = Object.keys(doc.paths ?? {}).length - Object.keys(keptPaths).length;
doc.paths = keptPaths;

// 2. Collect every $ref string reachable from an arbitrary object.
function collectRefs(node, acc) {
  if (!node || typeof node !== "object") return acc;
  if (Array.isArray(node)) {
    for (const v of node) collectRefs(v, acc);
    return acc;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k === "$ref" && typeof v === "string") acc.add(v);
    else collectRefs(v, acc);
  }
  return acc;
}

const components = doc.components ?? {};

// 3. Reachability fixpoint over local component refs (#/components/<bucket>/<name>).
const reached = new Set(); // "bucket/name"
const seed = collectRefs(doc.paths, new Set());
const queue = [...seed];

function refKey(ref) {
  const m = /^#\/components\/([^/]+)\/(.+)$/.exec(ref);
  return m ? { bucket: m[1], name: m[2] } : null;
}

while (queue.length) {
  const ref = queue.pop();
  const parsed = refKey(ref);
  if (!parsed) continue;
  const id = `${parsed.bucket}/${parsed.name}`;
  if (reached.has(id)) continue;
  reached.add(id);
  const target = components[parsed.bucket]?.[parsed.name];
  if (target) for (const r of collectRefs(target, new Set())) queue.push(r);
}

// 4. Rebuild components keeping only reached entries; always keep securitySchemes.
const ALWAYS_KEEP = new Set(["securitySchemes"]);
const newComponents = {};
let prunedSchemas = 0;
for (const [bucket, entries] of Object.entries(components)) {
  if (ALWAYS_KEEP.has(bucket)) {
    newComponents[bucket] = entries;
    continue;
  }
  const kept = {};
  for (const [name, value] of Object.entries(entries)) {
    if (reached.has(`${bucket}/${name}`)) kept[name] = value;
    else if (bucket === "schemas") prunedSchemas++;
  }
  if (Object.keys(kept).length) newComponents[bucket] = kept;
}
doc.components = newComponents;

// 5. Trim the oauth2 scheme to a single flow (clientCredentials). The upstream
// scheme declares three flows (authorizationCode, clientCredentials, password);
// generators emit one auth registration PER flow, which is at best noisy (Java
// README repeats the snippet 3x) and at worst broken (the Rust client appends
// three identical `Authorization` headers -> Cloudflare 400). Client SDKs use
// client-credentials, so keep only that flow.
// 5b. Strip `format: decimal` from string properties. The API serialises money
// amounts as JSON strings (e.g. "15.00"), and the spec correctly types them as
// `string` — but `format: decimal` makes generators map the field to a numeric
// type (Go float64, C# decimal), which then fails to unmarshal the string value.
let decimalFormatsStripped = 0;
function stripDecimalFormat(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) return node.forEach(stripDecimalFormat);
  if (node.type === "string" && node.format === "decimal") {
    delete node.format;
    decimalFormatsStripped++;
  }
  for (const v of Object.values(node)) stripDecimalFormat(v);
}
stripDecimalFormat(doc.components?.schemas ?? {});

// 5c. Relax over-strict `required` fields. The webhook *list* endpoint omits
// `token` and `organisation_name` (it doesn't leak tokens in a list), but the
// spec marks them required on WebhookResponse, so strict clients fail to
// deserialize the list. Make them optional.
const RELAX_REQUIRED = { WebhookResponse: ["token", "organisation_name"] };
let relaxedRequired = 0;
for (const [name, fields] of Object.entries(RELAX_REQUIRED)) {
  const schema = doc.components?.schemas?.[name];
  if (schema?.required) {
    const before = schema.required.length;
    schema.required = schema.required.filter((f) => !fields.includes(f));
    relaxedRequired += before - schema.required.length;
  }
}

// 5d. Strip readOnly properties from `required` on request-body schemas. e.g.
// DivisionWrite marks `id` both readOnly and required, so generated clients
// demand an id when *creating* a division — impossible to satisfy. Collect the
// schemas used as request bodies (transitively) and drop readOnly-required.
const reqBodyNames = new Set();
const reqQueue = [];
for (const item of Object.values(doc.paths)) {
  for (const m of ["post", "put", "patch"]) {
    const content = item[m]?.requestBody?.content;
    if (!content) continue;
    for (const media of Object.values(content)) {
      for (const ref of collectRefs(media.schema ?? {}, new Set())) reqQueue.push(ref);
    }
  }
}
while (reqQueue.length) {
  const parsed = refKey(reqQueue.pop());
  if (!parsed || parsed.bucket !== "schemas" || reqBodyNames.has(parsed.name)) continue;
  reqBodyNames.add(parsed.name);
  const target = doc.components?.schemas?.[parsed.name];
  if (target) for (const r of collectRefs(target, new Set())) reqQueue.push(r);
}
let readOnlyRequiredStripped = 0;
for (const name of reqBodyNames) {
  const schema = doc.components?.schemas?.[name];
  if (!schema?.required || !schema.properties) continue;
  const before = schema.required.length;
  schema.required = schema.required.filter((f) => !schema.properties[f]?.readOnly);
  readOnlyRequiredStripped += before - schema.required.length;
}

// 5e. Allow extra properties on response schemas that the API returns with
// fields the spec doesn't document. The webhook endpoints are inconsistent —
// create returns token/organisation_name/verification_sent/warning, while list
// returns organisation/organisation_id/last_triggered. Strict clients (Go, Java)
// reject unknown fields, so enumerating them is whack-a-mole; instead mark these
// schemas additionalProperties:true so undocumented fields are tolerated.
const TOLERANT_SCHEMAS = ["WebhookResponse"];
let tolerated = 0;
for (const name of TOLERANT_SCHEMAS) {
  const schema = doc.components?.schemas?.[name];
  if (schema && schema.additionalProperties === undefined) {
    schema.additionalProperties = true;
    tolerated++;
  }
}

// 5f. Replace the verbose upstream info.description (a run-on auth blurb) with a
// clean one-paragraph summary. Generators bake info.description into each
// package's description/summary (e.g. it's what RubyGems shows), so the raw blurb
// renders badly. Keep it concise plain text that reads well on every registry.
if (doc.info) {
  doc.info.description =
    "Official client library for the Pescheck API (v2), generated from the " +
    "OpenAPI specification. Authenticate with OAuth2 client credentials and use " +
    "the checks, profiles, screenings, webhooks and divisions endpoints. " +
    "See https://github.com/pescheckit/pescheck-clients for installation and usage.";
}

const oauth2 = doc.components?.securitySchemes?.oauth2;
let trimmedFlows = 0;
if (oauth2?.flows) {
  const keep = "clientCredentials";
  for (const flow of Object.keys(oauth2.flows)) {
    if (flow !== keep) {
      delete oauth2.flows[flow];
      trimmedFlows++;
    }
  }
}

const out = yaml.dump(doc, { lineWidth: -1, noRefs: true, sortKeys: false });
writeFileSync(outputPath, out);

console.log(`Filtered spec written to ${outputPath}`);
console.log(`  paths kept:     ${Object.keys(keptPaths).length} (dropped ${droppedCount})`);
console.log(`  schemas kept:   ${Object.keys(newComponents.schemas ?? {}).length} (pruned ${prunedSchemas})`);
console.log(`  oauth2 flows:   trimmed ${trimmedFlows} (kept clientCredentials)`);
console.log(`  decimal format: stripped from ${decimalFormatsStripped} string field(s)`);
console.log(`  relaxed required: ${relaxedRequired} field(s); readOnly-required stripped: ${readOnlyRequiredStripped}`);
console.log(`  tolerant (additionalProperties) schemas: ${tolerated}`);
