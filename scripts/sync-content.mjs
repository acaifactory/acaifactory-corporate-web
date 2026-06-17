/**
 * READ-ONLY sync from ordering app → corporate site data + assets.
 * Never writes to ordering app or other existing projects.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ORDERING_ROOT = path.resolve(
  "C:/Users/onixo/Documents/Codex/2026-05-27/te-voy-dar-unos-file-para"
);
const ORDERING_APP = path.join(ORDERING_ROOT, "app.js");
const ORDERING_ASSETS = path.join(ORDERING_ROOT, "assets");

function extractArray(source, name) {
  const marker = `const ${name} = [`;
  const start = source.indexOf(marker);
  if (start === -1) return [];
  const bracketStart = source.indexOf("[", start);
  let depth = 0;
  for (let i = bracketStart; i < source.length; i++) {
    if (source[i] === "[") depth++;
    if (source[i] === "]") {
      depth--;
      if (depth === 0) {
        // eslint-disable-next-line no-eval
        return eval(source.slice(bracketStart, i + 1));
      }
    }
  }
  return [];
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeItem(item) {
  const id =
    item.id ||
    slugify(item.name);
  return {
    id,
    name: item.name,
    category: item.category,
    tier: item.tier || "menu",
    label: item.label || item.category,
    image: item.image?.replace(/^assets\//, "/images/products/") || null,
    prices: item.prices || { Each: item.price },
    ingredients: item.ingredients || [],
  };
}

if (!fs.existsSync(ORDERING_APP)) {
  console.error("Ordering app not found:", ORDERING_APP);
  process.exit(1);
}

const source = fs.readFileSync(ORDERING_APP, "utf8");
const products = extractArray(source, "products");
const drinks = extractArray(source, "drinks");
const chia = extractArray(source, "chia");
const addOns = extractArray(source, "addOns");

const menu = [...products, ...chia, ...drinks].map(normalizeItem);

const categories = [
  "Signature Bowls",
  "Premium Bowls",
  "Coco & Mango",
  "Baby Bowls",
  "Chia Puddings",
  "Smoothies",
  "Milkshakes",
  "Frappés",
  "Specialty Coffee",
];

const dataDir = path.join(ROOT, "src/data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "menu.json"),
  JSON.stringify({ categories, items: menu, addOns }, null, 2)
);

console.log(`Synced ${menu.length} menu items, ${addOns.length} add-ons.`);

// --- Copy images (read-only from ordering app assets) ---
function copyFileSafe(source, destination) {
  if (!fs.existsSync(source)) return false;
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
  return true;
}

const productsOut = path.join(ROOT, "public/images/products");
const brandOut = path.join(ROOT, "public/brand");
fs.mkdirSync(productsOut, { recursive: true });
fs.mkdirSync(brandOut, { recursive: true });

let copiedProducts = 0;
let missingProducts = [];

for (const item of menu) {
  if (!item.image) continue;
  const filename = path.basename(item.image);
  const source = path.join(ORDERING_ASSETS, filename);
  const dest = path.join(productsOut, filename);
  if (copyFileSafe(source, dest)) {
    copiedProducts++;
  } else {
    missingProducts.push(filename);
  }
}

const brandFiles = ["logo.png", "logo.webp"];
let copiedBrand = 0;
for (const file of brandFiles) {
  if (copyFileSafe(path.join(ORDERING_ASSETS, file), path.join(brandOut, file))) {
    copiedBrand++;
  }
}

// Hero / marketing extras (optional)
for (const extra of ["menu-bowls-board.webp", "board-coco-mango.webp", "board-drinks.webp"]) {
  copyFileSafe(path.join(ORDERING_ASSETS, extra), path.join(productsOut, extra));
}

console.log(`Copied ${copiedProducts} product images, ${copiedBrand} brand files.`);
if (missingProducts.length) {
  console.log(`Missing ${missingProducts.length} images:`, missingProducts.slice(0, 5).join(", "));
}
