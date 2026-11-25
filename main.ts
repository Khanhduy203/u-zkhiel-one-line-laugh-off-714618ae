// One-Line Laugh-Off entry.
// Writes exactly one funny line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node-stdlib-only: no network, no randomness, no file reads.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent cleared my to-do list by deleting it, then billed me for the productivity.";

// Gate contract: the entry must be a single line of 1–200 chars.
// The guard below enforces it so a bad entry fails loudly at build time
// instead of shipping an invalid entry.txt.
const entry = ENTRY.trim();
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
