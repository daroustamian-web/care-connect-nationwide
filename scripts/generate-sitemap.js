#!/usr/bin/env node

/**
 * Generate sitemap.xml for all city pages
 * Run this script after building to generate a comprehensive sitemap
 */

const fs = require('fs');
const path = require('path');

// Read city data
const citiesPath = path.join(__dirname, '../data/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

console.log(`\n🗺️  Generating sitemap for ${cities.length} city pages...\n`);

const baseUrl = 'https://careconnectinc.com';
const today = new Date().toISOString().split('T')[0];

// Generate sitemap entries
const cityEntries = cities.map((city) => {
  return `  <url>
    <loc>${baseUrl}/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/assisted-living</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/cost-calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/resources</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
${cityEntries}
</urlset>`;

// Write sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated successfully!`);
console.log(`📍 Location: public/sitemap.xml`);
console.log(`📊 Total URLs: ${cities.length + 5}`);
console.log(`🌐 Base URL: ${baseUrl}\n`);

// Generate summary
const summary = `# Care Connect Sitemap Summary

Generated: ${new Date().toISOString()}

## Statistics
- **Total Pages**: ${cities.length + 5}
- **City Pages**: ${cities.length}
- **Static Pages**: 5
- **Base URL**: ${baseUrl}

## All City URLs

${cities.map((city, i) =>
  `${i + 1}. [${city.city}, ${city.stateAbbrev}](${baseUrl}/assisted-living/${city.stateAbbrev.toLowerCase()}/${city.slug}) - ${city.facilityCount} facilities`
).join('\n')}

## Next Steps

1. **Deploy** the site to production
2. **Submit sitemap** to Google Search Console
   - URL: ${baseUrl}/sitemap.xml
3. **Monitor indexing** in Search Console
4. **Track rankings** for target keywords
5. **Build backlinks** to high-priority pages

## SEO Strategy

Each city page is optimized for:
- "assisted living in [city]"
- "senior living [city] [state]"
- "assisted living facilities [city]"
- "[city] assisted living cost"

Expected Results (3-6 months):
- 50-100+ organic visits/month per page
- Total: 5,000-10,000+ organic visits/month across all pages
- Conversion rate: 2-4% = 100-400 leads/month
`;

const summaryPath = path.join(__dirname, '../SITEMAP-SUMMARY.md');
fs.writeFileSync(summaryPath, summary);

console.log(`📄 Summary saved to: SITEMAP-SUMMARY.md\n`);
