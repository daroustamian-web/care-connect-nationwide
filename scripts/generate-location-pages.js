#!/usr/bin/env node

/**
 * Generate multiple location-based pages for programmatic SEO
 *
 * Usage:
 * node scripts/generate-location-pages.js
 *
 * This will read locations.json and create pages for each location
 */

const fs = require('fs');
const path = require('path');

// Sample locations data structure
const sampleLocations = [
  {
    city: 'San Diego',
    state: 'CA',
    county: 'San Diego County',
    phone: '(619) 555-0123',
    email: 'sandiego@eldercare.com',
    slug: 'san-diego',
    zipCodes: ['92101', '92102', '92103'],
    neighborhoods: ['La Jolla', 'Pacific Beach', 'Downtown'],
  },
  {
    city: 'Los Angeles',
    state: 'CA',
    county: 'Los Angeles County',
    phone: '(213) 555-0123',
    email: 'la@eldercare.com',
    slug: 'los-angeles',
    zipCodes: ['90001', '90002', '90003'],
    neighborhoods: ['Santa Monica', 'Beverly Hills', 'Hollywood'],
  },
  {
    city: 'Phoenix',
    state: 'AZ',
    county: 'Maricopa County',
    phone: '(602) 555-0123',
    email: 'phoenix@eldercare.com',
    slug: 'phoenix',
    zipCodes: ['85001', '85002', '85003'],
    neighborhoods: ['Scottsdale', 'Tempe', 'Mesa'],
  },
];

// Create locations.json if it doesn't exist
const locationsPath = path.join(__dirname, '../locations.json');
if (!fs.existsSync(locationsPath)) {
  fs.writeFileSync(locationsPath, JSON.stringify(sampleLocations, null, 2));
  console.log('✅ Created locations.json with sample data');
}

// Read locations
const locations = JSON.parse(fs.readFileSync(locationsPath, 'utf8'));

// Create app/[location] directory structure
const appDir = path.join(__dirname, '../app');
const locationsDir = path.join(appDir, '[location]');

if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

// Generate dynamic location page template
const locationPageTemplate = `import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import AgitateSection from '@/components/AgitateSection'
import SolutionSection from '@/components/SolutionSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BookingSection from '@/components/BookingSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

// This would be replaced with actual data fetching
const locations = ${JSON.stringify(locations, null, 2)}

export async function generateStaticParams() {
  return locations.map((location) => ({
    location: location.slug,
  }))
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const location = locations.find((loc) => loc.slug === params.location)

  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  return {
    title: \`Premium Senior Care Services in \${location.city}, \${location.state} | In-Home Care\`,
    description: \`Compassionate, reliable in-home senior care in \${location.city}, \${location.state}. Our highly trained caregivers provide the support your loved ones need.\`,
  }
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = locations.find((loc) => loc.slug === params.location)

  if (!location) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero locationData={location} />
      <ProblemSection />
      <AgitateSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection locationData={location} />
      <BookingSection locationData={location} />
      <ContactForm locationData={location} />
      <Footer locationData={location} />
    </main>
  )
}
`;

// Write the dynamic page
fs.writeFileSync(
  path.join(locationsDir, 'page.tsx'),
  locationPageTemplate
);

console.log('✅ Generated dynamic location page at app/[location]/page.tsx');

// Generate sitemap for all locations
const sitemapEntries = locations.map((loc) => {
  return `  <url>
    <loc>https://yourdomain.com/${loc.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${sitemapEntries}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Generated sitemap.xml with all location pages');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
console.log('✅ Generated robots.txt');

console.log('\n📊 Summary:');
console.log(`   - Generated ${locations.length} location pages`);
console.log(`   - Created sitemap with ${locations.length + 1} URLs`);
console.log(`   - Location pages will be available at:`);
locations.forEach((loc) => {
  console.log(`     • /${loc.slug} (${loc.city}, ${loc.state})`);
});

console.log('\n🚀 Next steps:');
console.log('   1. Review locations.json and add/edit locations');
console.log('   2. Update components to accept locationData prop');
console.log('   3. Run: npm run build');
console.log('   4. Deploy your site!');
