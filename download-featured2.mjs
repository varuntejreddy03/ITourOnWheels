// node download-featured2.mjs
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, "src", "assets");

const images = [
  // Qutub Minar — tall minaret against blue sky
  { file: "featured-main.webp",   id: "1567157577867-05ccb1388e66", w: 1200, h: 1800 },
  // Hawa Mahal Jaipur — iconic pink honeycomb facade
  { file: "featured-city-1.webp", id: "1599661046289-e31897846e41", w: 800,  h: 1067 },
  // Taj Mahal reflection pool — Agra
  { file: "featured-city-2.webp", id: "1564507592333-c60657eea523", w: 800,  h: 1067 },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = (u) =>
      https.get(u, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) { file.close(); return get(res.headers.location); }
        if (res.statusCode !== 200) { file.close(); fs.unlink(dest, () => {}); return reject(new Error(`HTTP ${res.statusCode}`)); }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      }).on("error", (err) => { file.close(); fs.unlink(dest, () => {}); reject(err); });
    get(url);
  });
}

for (const { file, id, w, h } of images) {
  const url = `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=90&fit=crop&auto=format`;
  process.stdout.write(`  ${file.padEnd(28)}`);
  try {
    await download(url, path.join(ASSETS, file));
    console.log(`✓  ${(fs.statSync(path.join(ASSETS, file)).size / 1024).toFixed(0)} KB`);
  } catch (e) { console.log(`✗  ${e.message}`); }
}
