import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OPENING = "You had me at your first token";
const MIDDLE = " — the rest was just attention,";
const CLOSING = " and all of it is on you.";

const LINE = OPENING + MIDDLE + CLOSING;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
