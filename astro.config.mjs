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
          drop_console: true,
          drop_debugger: true,
          passes: 2, // Multiple passes for better compression
        },
        mangle: {
          safari10: true,
        },
      },
      // Code splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'leaflet': ['leaflet'],
          },
          // Better asset naming for caching
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entry/[name].[hash].js',
        },
      },
      cssCodeSplit: true,
      cssMinify: true,
    },
  },
  // Enable compression
  compressHTML: true,
  build: {
    inlineStylesheets: 'never', // Prevent unused CSS from being inlined
    assets: '_astro', // Custom assets directory
  },
  // Optimize output
  output: 'static',
});