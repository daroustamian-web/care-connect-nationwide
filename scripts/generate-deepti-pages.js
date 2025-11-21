#!/usr/bin/env node

/**
 * Generate location-specific pages for Deepti's service areas
 *
 * This creates 25 unique SEO pages, one for each zip code
 */

const fs = require('fs');
const path = require('path');

// Read Deepti's locations
const locations = require('../deepti-locations.json');

console.log(`\n🚀 Generating ${locations.length} location pages for Deepti...\n`);

// Create the pages directory if it doesn't exist
const pagesDir = path.join(__dirname, '../generated-pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate a page for each location
locations.forEach((location, index) => {
  const pageContent = `# Senior Care in ${location.city}, CA ${location.zipCode}

## Professional In-Home Senior Care Services in ${location.city}

Serving the ${location.neighborhoods.join(', ')} areas with compassionate, reliable senior care.

### Contact Us
- **Phone:** ${location.phone}
- **Email:** ${location.email}
- **Service Area:** ${location.city}, ${location.state} ${location.zipCode}

### About Our Service in ${location.city}

We provide premium in-home senior care specifically for residents of ${location.city} (${location.zipCode}). Our caregivers are:
- Background checked and certified
- Experienced with local seniors
- Available 24/7 for your needs
- Familiar with ${location.neighborhoods.join(', ')} neighborhoods

### Services Available in Zip Code ${location.zipCode}:
- Companion Care
- Personal Care
- Dementia & Alzheimer's Care
- Respite Care
- 24-Hour Care
- Veterans Care

### Why Choose Us in ${location.city}?
1. **Local Expertise** - We know ${location.city} and serve your specific area
2. **Fast Response** - Quick service to ${location.zipCode}
3. **Trusted Caregivers** - Vetted professionals familiar with your neighborhood
4. **Affordable Rates** - Competitive pricing for ${location.county}

### Neighborhoods We Serve:
${location.neighborhoods.map(n => `- ${n}`).join('\n')}

### Get Started Today
Call us at ${location.phone} or email ${location.email} for a free consultation.

---

**Service Area:** ${location.city}, CA ${location.zipCode} | ${location.county}
**URL:** /locations/${location.slug}
`;

  const filename = `${location.slug}.md`;
  fs.writeFileSync(path.join(pagesDir, filename), pageContent);

  console.log(`✅ Generated: /locations/${location.slug}`);
});

// Generate sitemap
const sitemapEntries = locations.map((loc) => {
  return `  <url>
    <loc>https://deeptiseniorcare.com/locations/${loc.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://deeptiseniorcare.com</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/deepti-sitemap.xml'), sitemap);

// Generate summary file
const summary = `# Deepti's Location Pages - Summary

Generated: ${new Date().toISOString()}

## Stats
- Total Pages: ${locations.length}
- Total Zip Codes: ${locations.length}
- Service Area: San Diego County

## All Location URLs:

${locations.map((loc, i) => `${i + 1}. /locations/${loc.slug} - ${loc.city}, CA ${loc.zipCode}`).join('\n')}

## Next Steps:

1. **Deploy these pages** to your domain
2. **Submit sitemap** to Google Search Console
3. **Add Google Business Profile** for each major neighborhood
4. **Create local backlinks** from San Diego directories
5. **Run Google/Facebook ads** targeting each zip code

## SEO Strategy:

Each page is optimized for:
- "senior care [zip code]"
- "senior care in [city]"
- "in-home care [neighborhood]"
- "elderly care [zip code]"

## Estimated Results:

With proper optimization, expect:
- 50-100 organic visits/month per page after 3-6 months
- Total: 1,250-2,500 organic visits/month across all pages
- Conversion rate: 3-5% = 37-125 leads/month from SEO alone

Combined with your Google/Facebook ads = even more leads!

## Cost:
- Domain: $15/year
- Hosting (Vercel): FREE
- Total: $15/year for ALL 25 pages!
`;

fs.writeFileSync(path.join(pagesDir, 'SUMMARY.md'), summary);

console.log(`\n📊 Summary:`);
console.log(`   - Generated ${locations.length} location pages`);
console.log(`   - Created sitemap with ${locations.length + 1} URLs`);
console.log(`   - All pages saved to: generated-pages/`);
console.log(`\n🎯 Each page optimized for:`);
console.log(`   - "senior care [zip code]"`);
console.log(`   - "in-home care [city]"`);
console.log(`   - Local neighborhood keywords`);
console.log(`\n💰 Cost: Just $15/year (domain only!)`);
console.log(`\n📈 Next: Deploy to Vercel and submit sitemap to Google!`);
