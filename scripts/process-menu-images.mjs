/**
 * Scale selected product regions within menu pages.
 * Signature Bowls = master reference (no changes).
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const RAW = "public/marketing/menu/raw";
const OUT = "public/marketing/menu";

async function sampleBg(buf, left, top) {
  const { data } = await sharp(buf)
    .extract({ left: Math.max(0, left), top: Math.max(0, top), width: 1, height: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { r: data[0], g: data[1], b: data[2], alpha: 255 };
}

/** @param {{ x:number,y:number,w:number,h:number,scale:number, fill?:object }[]} regions */
async function applyRegionScales(inputPath, outputPath, regions) {
  let buf = await sharp(inputPath).png().toBuffer();
  const meta = await sharp(buf).metadata();
  const W = meta.width;
  const H = meta.height;

  for (const r of regions) {
    const left = Math.min(Math.max(0, Math.round(r.x * W)), W - 2);
    const top = Math.min(Math.max(0, Math.round(r.y * H)), H - 2);
    const width = Math.min(Math.max(2, Math.round(r.w * W)), W - left);
    const height = Math.min(Math.max(2, Math.round(r.h * H)), H - top);
    const bg = r.fill ?? (await sampleBg(buf, left + 2, top + 2));

    const patch = await sharp(buf).extract({ left, top, width, height }).png().toBuffer();
    const nw = Math.max(1, Math.round(width * r.scale));
    const nh = Math.max(1, Math.round(height * r.scale));
    const scaled = await sharp(patch).resize(nw, nh, { kernel: "lanczos3" }).png().toBuffer();
    const fill = await sharp({
      create: { width, height, channels: 4, background: bg },
    })
      .png()
      .toBuffer();

    buf = await sharp(buf)
      .composite([
        { input: fill, left, top },
        {
          input: scaled,
          left: left + Math.round((width - nw) / 2),
          top: top + Math.round((height - nh) / 2),
        },
      ])
      .png()
      .toBuffer();
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  await sharp(buf).png({ compressionLevel: 6 }).toFile(outputPath);
  const stat = fs.statSync(outputPath);
  console.log(`  -> ${outputPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
}

function row5(y, h, scale, xStart, colW, gap) {
  const regions = [];
  for (let i = 0; i < 5; i++) {
    regions.push({ x: xStart + i * (colW + gap), y, w: colW, h, scale });
  }
  return regions;
}

function row6(y, h, scale, xStart, colW, gap) {
  const regions = [];
  for (let i = 0; i < 6; i++) {
    regions.push({ x: xStart + i * (colW + gap), y, w: colW, h, scale });
  }
  return regions;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  // 1. Signature — master, no edits
  console.log("Signature Bowls (reference, unchanged)");
  fs.copyFileSync(
    path.join(RAW, "menu-01.png"),
    path.join(OUT, "signature-bowls.png")
  );

  // 2. Baby & Chia — use original (region scaling caused visible rectangle artifacts)
  console.log("Baby & Chia (original, unchanged)");
  fs.copyFileSync(
    path.join(RAW, "menu-02.png"),
    path.join(OUT, "baby-chia.png")
  );

  // 3. Drinks — cups -10%, toppings -15%, add favorites -10%
  console.log("Drinks");
  await applyRegionScales(path.join(RAW, "menu-03.png"), path.join(OUT, "drinks.png"), [
    // Smoothies cups (5)
    ...row5(0.27, 0.34, 0.9, 0.025, 0.168, 0.012),
    // Milkshakes cups (6)
    ...row6(0.278, 0.34, 0.9, 0.278, 0.108, 0.006),
    // Frappés cups (5)
    ...row5(0.27, 0.34, 0.9, 0.688, 0.052, 0.008),
    // Toppings at cup bases
    ...row5(0.58, 0.08, 0.85, 0.035, 0.162, 0.013),
    ...row6(0.58, 0.08, 0.85, 0.278, 0.105, 0.006),
    ...row5(0.58, 0.08, 0.85, 0.685, 0.05, 0.008),
    // Specialty coffee mugs
    ...row5(0.68, 0.12, 0.9, 0.035, 0.162, 0.013),
    // Add Your Favorites block
    { x: 0.34, y: 0.72, w: 0.56, h: 0.11, scale: 0.9 },
  ]);

  // 4. Coco & Mango — use original (region scaling caused visible rectangle artifacts)
  console.log("Coco & Mango (original, unchanged)");
  fs.copyFileSync(
    path.join(RAW, "menu-04.png"),
    path.join(OUT, "coco-mango.png")
  );

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
