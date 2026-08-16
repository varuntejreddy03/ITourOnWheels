import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input  = path.join(__dirname, "public", "india-tour-on-wheels-crest.png");
const output = path.join(__dirname, "public", "logo-transparent.png");

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const pixels = new Uint8Array(data);

function idx(x, y) { return (y * width + x) * channels; }

function isWhitish(x, y) {
  const i = idx(x, y);
  const r = pixels[i], g = pixels[i+1], b = pixels[i+2];
  return r > 200 && g > 200 && b > 200;
}

// Flood fill from all 4 corners to mark background pixels
const visited = new Uint8Array(width * height);
const queue = [];

function enqueue(x, y) {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const k = y * width + x;
  if (visited[k] || !isWhitish(x, y)) return;
  visited[k] = 1;
  queue.push(x, y);
}

// Seed from all edges
for (let x = 0; x < width; x++) { enqueue(x, 0); enqueue(x, height - 1); }
for (let y = 0; y < height; y++) { enqueue(0, y); enqueue(width - 1, y); }

// BFS
let qi = 0;
while (qi < queue.length) {
  const x = queue[qi++], y = queue[qi++];
  enqueue(x+1, y); enqueue(x-1, y); enqueue(x, y+1); enqueue(x, y-1);
}

// Make background transparent
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (visited[y * width + x]) {
      pixels[idx(x, y) + 3] = 0;
    }
  }
}

await sharp(Buffer.from(pixels), { raw: { width, height, channels } }).png().toFile(output);
console.log("Done →", output);
