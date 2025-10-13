import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DOMAIN = 'https://www.articclean.it';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const staticPages: SitemapUrl[] = [
  {
    loc: `${DOMAIN}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    loc: `${DOMAIN}/chi-siamo`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${DOMAIN}/come-lavoriamo`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${DOMAIN}/recensioni`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.7'
  },
  {
    loc: `${DOMAIN}/servizi`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    loc: `${DOMAIN}/dove-operiamo`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    loc: `${DOMAIN}/richiedi-preventivo`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.9'
  }
];

const servicePages = [
  'pulizie-uffici',
  'pulizie-condomini',
  'pulizie-industriali',
  'pulizie-post-cantiere',
  'sanificazione-ambienti',
  'pulizia-vetri',
  'gestione-carrellati',
  'giardinaggio'
].map(slug => ({
  loc: `${DOMAIN}/servizi/${slug}`,
  lastmod: new Date().toISOString().split('T')[0],
  changefreq: 'weekly',
  priority: '0.8'
}));

async function generateSitemap() {
  console.log('📍 Generating sitemap.xml...');

  const { data: localPages, error } = await supabase
    .from('local_service_pages')
    .select('slug, updated_at')
    .eq('published', true)
    .order('slug', { ascending: true });

  if (error) {
    console.error('❌ Error fetching local pages:', error);
    return;
  }

  console.log(`✅ Found ${localPages?.length || 0} local service pages`);

  const localPageUrls: SitemapUrl[] = (localPages || []).map((page) => ({
    loc: `${DOMAIN}/servizi/${page.slug}`,
    lastmod: new Date(page.updated_at).toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  }));

  const allUrls = [...staticPages, ...servicePages, ...localPageUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = resolve(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

  console.log(`✅ Sitemap generated successfully: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${allUrls.length}`);
  console.log(`   - Static pages: ${staticPages.length}`);
  console.log(`   - Service hub pages: ${servicePages.length}`);
  console.log(`   - Local service pages: ${localPageUrls.length}`);
}

generateSitemap().catch(console.error);
