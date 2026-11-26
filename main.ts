import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
copyFileSync(new URL("./entry.txt", import.meta.url), `${outDir}/entry.txt`);
