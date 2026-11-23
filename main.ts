import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Contains one human. Side effects include sudden naps, loud opinions, and insisting 'I'm fine' when it is clearly not.";

// The gate only accepts 1–160 characters, so refuse to write an over-long line.
if (LINE.length === 0 || LINE.length > 160 || LINE.includes("\n")) {
  console.error(`entry must be a single line of 1-160 chars, got ${LINE.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`${LINE} (${LINE.length} chars)`);
