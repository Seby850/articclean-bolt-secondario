import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import webfontDownload from 'vite-plugin-webfont-dl';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEV_PORT = Number(process.env.PORT ?? process.env.VITE_PORT ?? 5173);
const PREVIEW_PORT = Number(process.env.PREVIEW_PORT ?? 4173);
const HMR_HOST = process.env.VITE_HMR_HOST ?? '127.0.0.1';
const reactPath = path.resolve(__dirname, 'node_modules/react');
const reactDomPath = path.resolve(__dirname, 'node_modules/react-dom');

const resolveSupabaseStorageAnalytics = () => ({
  name: 'resolve-supabase-storage-analytics',
  resolveId(source, importer) {
    if (
      source === './packages/StorageAnalyticsApi' &&
      importer?.includes('@supabase/storage-js/dist/module')
    ) {
      const candidate = path.resolve(
        path.dirname(importer as string),
        'packages/StorageAnalyticsApi.js'
      );
      // Avoid forcing resolution when the optional file is missing (e.g. serverless deploys)
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    return null;
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    resolveSupabaseStorageAnalytics(),
    compression({ algorithm: 'brotliCompress' }),
    compression({ algorithm: 'gzip' }),
    webfontDownload(undefined, {
      injectAsStyleTag: true,
      minifyCss: mode === 'production',
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: /^react$/, replacement: path.join(reactPath, 'index.js') },
      { find: /^react\/jsx-runtime$/, replacement: path.join(reactPath, 'jsx-runtime.js') },
      { find: /^react\/jsx-dev-runtime$/, replacement: path.join(reactPath, 'jsx-dev-runtime.js') },
      { find: /^react-dom$/, replacement: path.join(reactDomPath, 'index.js') },
      { find: /^react-dom\/client$/, replacement: path.join(reactDomPath, 'client.js') },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom'],
  },
  server: {
    host: '0.0.0.0',
    port: DEV_PORT,
    strictPort: true,
    hmr: {
      host: HMR_HOST,
      port: DEV_PORT,
      clientPort: DEV_PORT,
      protocol: 'ws',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: PREVIEW_PORT,
  },
  build: {
    sourcemap: mode !== 'production',
  },
}));
