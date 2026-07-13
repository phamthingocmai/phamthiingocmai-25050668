// Post-build cho GitHub Pages:
// 1) Rewrite mọi URL "/__l5e/..." (CDN Lovable) thành absolute URL để ảnh
//    và tài liệu vẫn hiển thị khi host trên GitHub Pages.
// 2) Copy index.html → 404.html để tránh lỗi 404 khi refresh / deep-link.
// 3) Đổi tên index.gh.html → index.html cho GitHub Pages nhận.
// 4) Tạo file .nojekyll để GitHub Pages không bỏ qua các thư mục có "_".
import { readdirSync, readFileSync, writeFileSync, renameSync, existsSync, statSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist-gh";
const ASSET_HOST = "https://phamthingocmai.lovable.app";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(html|js|css)$/.test(name)) {
      const before = readFileSync(p, "utf8");
      const after = before.replaceAll("/__l5e/", `${ASSET_HOST}/__l5e/`);
      if (before !== after) writeFileSync(p, after);
    }
  }
}

walk(DIST);

// Đổi tên entry html
if (existsSync(join(DIST, "index.gh.html"))) {
  renameSync(join(DIST, "index.gh.html"), join(DIST, "index.html"));
}

// SPA fallback
copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));

// .nojekyll
writeFileSync(join(DIST, ".nojekyll"), "");

console.log("✓ GitHub Pages build ready in", DIST);
