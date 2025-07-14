
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { AnalyticsProvider } from "@/components/Analytics";
import { preloadCriticalImages } from './utils/imageOptimization'

const queryClient = new QueryClient();

// Précharge les images critiques
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </StrictMode>
);
