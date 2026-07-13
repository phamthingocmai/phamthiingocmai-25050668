import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { PortfolioPage } from "./routes/index";

// Chuyển các URL ảnh tương đối `/__l5e/...` thành absolute (trỏ về CDN Lovable)
// để trang chạy được trên GitHub Pages, Netlify, hoặc bất kỳ host tĩnh nào.
const ASSET_HOST = "https://phamthingocmai.lovable.app";
if (typeof window !== "undefined") {
  const origAssign = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
  if (origAssign?.set) {
    Object.defineProperty(HTMLImageElement.prototype, "src", {
      set(v: string) {
        origAssign.set!.call(this, typeof v === "string" && v.startsWith("/__l5e/") ? ASSET_HOST + v : v);
      },
      get() {
        return origAssign.get!.call(this);
      },
      configurable: true,
    });
  }
  // Rewrite anchor href cho các file .docx / .zip tải xuống
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement)?.closest("a");
    if (a && a.getAttribute("href")?.startsWith("/__l5e/")) {
      a.setAttribute("href", ASSET_HOST + a.getAttribute("href")!);
    }
  }, true);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>
);
