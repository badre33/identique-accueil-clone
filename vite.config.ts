
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";

// Routes blog dynamiques : extraites du sitemap (source unique de vérité).
function blogRoutesFromSitemap(): string[] {
  try {
    const xml = fs.readFileSync(path.resolve(__dirname, "public/sitemap.xml"), "utf-8");
    return [...xml.matchAll(/https:\/\/linkagency\.ma(\/blog\/[^<]+)</g)].map((m) => m[1]);
  } catch {
    return [];
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  // Pré-rendu statique (vite-react-ssg) : toutes les routes statiques + blog.
  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes(paths: string[]) {
      const staticPaths = paths.filter((p) => !p.includes(":"));
      return [...new Set([...staticPaths, ...blogRoutesFromSitemap()])];
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations pour la production
    rollupOptions: {
      output: {
        // manualChunks uniquement pour le bundle CLIENT : en SSR, react & co
        // sont externes et ne peuvent pas être chunkés.
        manualChunks: isSsrBuild
          ? undefined
          : {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
              ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover', '@radix-ui/react-select'],
              query: ['@tanstack/react-query'],
              charts: ['recharts'],
              forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
            },
      },
    },
    // Configuration de minification plus robuste
    minify: mode === 'production' ? 'terser' : false,
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    } : undefined,
    // Source maps pour le débogage
    sourcemap: mode === 'development',
    // Taille limite des chunks réduite pour forcer plus de splits
    chunkSizeWarningLimit: 500,
  },
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  // react-helmet-async est en CommonJS : Vite doit le bundler pour le SSR
  // afin que les named exports (Helmet, HelmetProvider) fonctionnent.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
}));
