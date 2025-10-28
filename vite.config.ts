import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import webfontDownload from 'vite-plugin-webfont-dl';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEV_PORT = Number(process.env.PORT ?? process.env.VITE_PORT ?? 5173) || 5173;
const PREVIEW_PORT = Number(process.env.PREVIEW_PORT ?? 4173) || 4173;
const HMR_HOST = process.env.VITE_HMR_HOST;
const resolveSupabaseStorageAnalytics = () => ({
  name: 'resolve-supabase-storage-analytics',
  resolveId(source: string, importer?: string) {
    if (
      source === './packages/StorageAnalyticsApi' &&
      importer?.includes('@supabase/storage-js/dist/module')
    ) {
      const candidate = path.resolve(path.dirname(importer as string), 'packages/StorageAnalyticsApi.js');
      if (fs.existsSync(candidate)) return candidate;
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
    // ⬇️ il plugin accetta un SOLO oggetto opzioni
    webfontDownload({
      injectAsStyleTag: true,
      minifyCss: mode === 'production',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
    port: DEV_PORT,
    strictPort: false,
    hmr: HMR_HOST ? { host: HMR_HOST, protocol: 'ws' } : undefined,
  },
  preview: {
    host: '0.0.0.0',
    port: PREVIEW_PORT,
    strictPort: false,
  },
  build: { sourcemap: mode !== 'production' },
}));
