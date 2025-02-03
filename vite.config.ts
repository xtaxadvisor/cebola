import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createRequire } from 'module';

// Create a require function that works in this ES module context
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Map the "node:events" import to the npm-installed events package
      'node:events': require.resolve('events')
    },
  },
  build: {
    outDir: 'dist', // Build output directory
    sourcemap: false,
    minify: 'terser',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['lucide-react'],
          'vendor-charts': ['chart.js', 'react-chartjs-2'],
          'vendor-ai': ['openai'],
          'vendor-security': ['dompurify', 'zod'],
        },
      },
      // Treat "node:events" as external to avoid bundling it
      external: ['node:events']
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});