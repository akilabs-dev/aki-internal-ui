import fs from "node:fs/promises";
import path from "node:path";
import { converter, parse } from "culori";

const toRgb = converter("rgb");

const repoRoot = path.resolve(import.meta.dirname, "..");
const themePath = path.join(repoRoot, "src", "themes", "default.css");
const css = await fs.readFile(themePath, "utf8");

function extractBlock(selector) {
  const start = css.indexOf(selector);
  if (start < 0) return null;
  const braceStart = css.indexOf("{", start);
  if (braceStart < 0) return null;
  let depth = 0;
  for (let i = braceStart; i < css.length; i++) {
    const ch = css[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return css.slice(braceStart + 1, i);
    }
  }
  return null;
}

function parseVars(block) {
  if (!block) return {};
  const out = {};
  const re = /--([a-zA-Z0-9-_]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) {
    out[m[1]] = m[2].trim();
  }
  return out;
}

function oklchToFigmaRgb(value) {
  const c = parse(value);
  if (!c) return null;
  const rgb = toRgb(c);
  if (!rgb) return null;
  const clamp01 = (n) => Math.max(0, Math.min(1, n));
  return {
    r: clamp01(rgb.r ?? 0),
    g: clamp01(rgb.g ?? 0),
    b: clamp01(rgb.b ?? 0),
  };
}

const lightBlock = extractBlock(':root[data-theme="default"]');
const darkBlock = extractBlock(':root.dark[data-theme="default"]');

const lightVars = parseVars(lightBlock);
const darkVars = parseVars(darkBlock);

// Minimal set needed for Alert + basic focus/borders
const needed = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "muted-foreground",
  "destructive",
  "border",
  "ring",
];

const tokens = {};
for (const name of needed) {
  const light = lightVars[name];
  const dark = darkVars[name];
  tokens[name] = {
    cssVar: `--${name}`,
    light: light ? oklchToFigmaRgb(light) : null,
    dark: dark ? oklchToFigmaRgb(dark) : null,
    lightRaw: light ?? null,
    darkRaw: dark ?? null,
  };
}

const outPath = path.join(repoRoot, "scripts", "figma-default-color-tokens.json");
await fs.writeFile(outPath, JSON.stringify({ theme: "default", tokens }, null, 2) + "\n", "utf8");

console.log(outPath);

