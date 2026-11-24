// Empty each generated client directory before openapi-generator runs.
//
// openapi-generator only ADDS and OVERWRITES files. It never deletes, and it
// never overwrites test stubs it generated before. So without a clean slate:
//   - a test stub for an endpoint whose signature changed keeps calling the old
//     signature and the client stops compiling (Java/C#/... test sources), and
//   - a model or API removed from the schema keeps its old file forever.
// Everything in clients/<lang>/ is regenerated + postprocessed every run, so
// clearing it is safe. Keep only files that are not produced by the generator.
import { readdirSync, rmSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientsDir = resolve(root, "clients");
const KEEP = new Set([
  ".openapi-generator-ignore", // generator rules, if anyone adds some
  "package-lock.json", // JS/TS lockfiles are committed, not generated
]);

let removed = 0;
if (existsSync(clientsDir)) {
  for (const lang of readdirSync(clientsDir, { withFileTypes: true })) {
    if (!lang.isDirectory()) continue;
    const dir = resolve(clientsDir, lang.name);
    for (const entry of readdirSync(dir)) {
      if (KEEP.has(entry)) continue;
      rmSync(resolve(dir, entry), { recursive: true, force: true });
      removed++;
    }
  }
}
console.log(`clean-clients: removed ${removed} entr${removed === 1 ? "y" : "ies"} from clients/*/ before generating`);
