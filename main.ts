import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIAGNOSIS =
  "Diagnosis: acute permission-seeking disorder — patient asks a chatbot for consent to feel sad, then apologises to it for crying at 3 a.m. and waits for it to forgive him.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = DIAGNOSIS;
  if (line.length < 1 || line.length > 200) {
    console.error(`entry must be 1-200 characters, got ${line.length}`);
    process.exit(1);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    console.error("entry must be a single non-blank line");
    process.exit(1);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} characters to entry.txt`);
}

main();
