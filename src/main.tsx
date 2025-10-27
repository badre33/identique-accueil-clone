
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AnalyticsProvider } from "@/components/Analytics";
import { preloadCriticalImages } from './utils/imageOptimization'

// Précharge les images critiques de manière non-bloquante
requestIdleCallback(() => {
  preloadCriticalImages();
}, { timeout: 2000 });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </StrictMode>
);
