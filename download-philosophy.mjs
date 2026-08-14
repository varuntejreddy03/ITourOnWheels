import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, "src", "assets");

const images = [
  // Rajasthan haveli courtyard — warm arches, golden light
  { file: "philosophy.webp",   id: "1609766857041-ed402ea8069a", w: 1000, h: 1300 },
  // Taj Mahal sunrise — travelers in foreground
  { file: "about-haveli.webp", id: "1548013146-72479768bada",    w: 1600, h: 1067 },
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
  process.stdout.write(`  ${file.padEnd(24)}`);
  try {
    await download(url, path.join(ASSETS, file));
    console.log(`✓  ${(fs.statSync(path.join(ASSETS, file)).size / 1024).toFixed(0)} KB`);
  } catch (e) { console.log(`✗  ${e.message}`); }
}
