
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { preloadCriticalImages } from './utils/imageOptimization'

// Précharge les images critiques de manière non-bloquante (compatible tous navigateurs)
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  requestIdleCallback(() => {
    preloadCriticalImages();
  }, { timeout: 2000 });
} else {
  // Fallback pour Safari/iOS et anciens navigateurs
  setTimeout(() => {
    preloadCriticalImages();
  }, 200);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
