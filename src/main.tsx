import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";
import { preloadCriticalImages } from "./utils/imageOptimization";

// Entrée SSG : vite-react-ssg pré-rend chaque route en HTML réel au build,
// puis hydrate côté client. Remplace l'ancien createRoot manuel.
export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (!isClient) return;
    // Précharge les images critiques, uniquement côté navigateur.
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => preloadCriticalImages(), { timeout: 2000 });
    } else {
      setTimeout(() => preloadCriticalImages(), 200);
    }
  }
);
