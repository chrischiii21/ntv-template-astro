// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Minify output
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
        },
      },
      // Code splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'leaflet': ['leaflet'],
          },
        },
      },
    },
  },
  // Enable compression
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});