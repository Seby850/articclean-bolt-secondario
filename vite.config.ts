import fs from 'fs';
import path from 'path';

// ...
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
      // Se il file non esiste (come su Vercel), non forzare la risoluzione
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    return null;
  },
});

