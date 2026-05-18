
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations pour la production
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Séparer les vendors lourds dans des chunks dédiés
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom';
            if (id.includes('react/') || id.includes('react-router')) return 'react';
            if (id.includes('@radix-ui')) return 'radix';
            if (id.includes('@tanstack/react-query')) return 'query';
            if (id.includes('recharts') || id.includes('d3-')) return 'charts';
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) return 'forms';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-helmet')) return 'helmet';
            return 'vendor';
          }
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
}));
