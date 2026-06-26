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

const out = yaml.dump(doc, { lineWidth: -1, noRefs: true, sortKeys: false });
writeFileSync(outputPath, out);

console.log(`Filtered spec written to ${outputPath}`);
console.log(`  paths kept:     ${Object.keys(keptPaths).length} (dropped ${droppedCount})`);
console.log(`  schemas kept:   ${Object.keys(newComponents.schemas ?? {}).length} (pruned ${prunedSchemas})`);
