import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['gsap'],
          'projects-data': [
            './src/data/projects-github.ts',
            './src/data/projects-consultant.ts',
            './src/data/projects-uiux.ts',
            './src/data/lab.ts',
            './src/data/services.ts',
            './src/data/timeline.ts',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});


