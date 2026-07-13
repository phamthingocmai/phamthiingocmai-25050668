// Post-build cho GitHub Pages:
// 1) Copy public/assets → dist-gh/assets (Vite thường đã tự copy, nhưng khi
//    build với input=index.gh.html thì cần đảm bảo).
// 2) Rewrite mọi URL "/__l5e/{id}/{filename}" → "./assets/{id}-{filename}"
//    dùng bảng scripts/asset-map.json.
// 3) Đổi tên index.gh.html → index.html.
// 4) Copy index.html → 404.html (SPA fallback).
// 5) Tạo .nojekyll.
import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, statSync, copyFileSync, mkdirSync, cpSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist-gh";
const map = JSON.parse(readFileSync("scripts/asset-map.json", "utf8"));

// Đảm bảo có thư mục assets trong dist
if (existsSync("public/assets")) {
  mkdirSync(join(DIST, "assets"), { recursive: true });
  cpSync("public/assets", join(DIST, "assets"), { recursive: true });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name === "assets" && dir === DIST) continue; // bỏ qua thư mục ảnh
      walk(p);
    } else if (/\.(html|js|css)$/.test(name)) {
      let text = readFileSync(p, "utf8");
      let changed = false;
      for (const [cdnUrl, localUrl] of Object.entries(map)) {
        if (text.includes(cdnUrl)) {
          text = text.replaceAll(cdnUrl, localUrl);
          changed = true;
        }
      }
      if (changed) writeFileSync(p, text);
    }
  }
}
walk(DIST);

if (existsSync(join(DIST, "index.gh.html"))) {
  renameSync(join(DIST, "index.gh.html"), join(DIST, "index.html"));
}
copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));
writeFileSync(join(DIST, ".nojekyll"), "");
console.log("✓ GitHub Pages build ready in", DIST, "— mapped", Object.keys(map).length, "assets locally.");
