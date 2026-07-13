import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Vite config riêng để build một trang tĩnh (SPA thuần React) cho GitHub Pages.
// Chạy: npm run build:gh — output ở thư mục `dist-gh/`.
export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  // base "./" giúp asset dùng đường dẫn tương đối, hoạt động cả với
  // https://<user>.github.io/<repo>/ lẫn user site https://<user>.github.io/.
  base: "./",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    outDir: "dist-gh",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.gh.html"),
    },
  },
});
