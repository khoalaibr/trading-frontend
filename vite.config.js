import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/trading-frontend/' : '/', // Ajusta automáticamente el `base`
  build: {
    outDir: 'docs', // Cambiar 'dist' por 'docs'
  },
  rollupOptions: {
    output: {
      manualChunks: undefined,
    },
  },
});

