import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['dompurify'], // Ensure DOMPurify is pre-bundled
  },
  build: {
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
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});