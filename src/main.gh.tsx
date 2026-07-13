import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { PortfolioPage } from "./routes/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>
);
