import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

const resolveSupabaseStorageAnalytics = () => ({
  name: 'resolve-supabase-storage-analytics',
  resolveId(source, importer) {
    if (
      source === './packages/StorageAnalyticsApi' &&
      importer?.includes('@supabase/storage-js/dist/module')
    ) {
      return path.resolve(
        path.dirname(importer as string),
        'packages/StorageAnalyticsApi.js'
      );
    }
    return null;
  }
});

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false
    }),
    resolveSupabaseStorageAnalytics()
  ],
  resolve: {
    // ⚠️ chiave: evita copie multiple
    dedupe: ['react', 'react-dom', 'react-router-dom'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      // ⚠️ forziamo tutti gli import a puntare alla stessa istanza
      react: path.resolve(__dirname, 'node_modules/react'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react-dom/client': path.resolve(__dirname, 'node_modules/react-dom/client')
    }
  },
  optimizeDeps: {
    // ⚠️ pre-bundle coerente (evita snapshot divergenti)
    include: ['react', 'react-dom', 'react-router-dom']
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    sourcemap: false
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    headers: { 'Cache-Control': 'public, max-age=31536000' },
    hmr: { protocol: 'ws', host: '127.0.0.1' }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true
  }
});

