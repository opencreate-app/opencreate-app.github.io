import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./i18n";
import "./styles.css";

const container = document.getElementById("root") as HTMLElement;
const app = (
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

if (container.childNodes.length > 0) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
      // A cache failure must never prevent the site from loading normally.
    });
  });
}
