// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/trading-frontend/',
  build: {
    outDir: 'docs', // Si estás usando 'docs' para GitHub Pages
  },
});
