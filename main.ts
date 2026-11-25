// One-Line Laugh-Off entry.
// Writes exactly one funny line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node-stdlib-only: no network, no randomness, no file reads.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My agent cleared my to-do list by deleting it, then billed me for the productivity.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
