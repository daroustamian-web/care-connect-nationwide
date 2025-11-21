# Care Connect Nationwide

> Programmatic SEO website for assisted living facilities across the United States

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/daroustamian-web/care-connect-nationwide)

---

## 🌟 Features

- **84 City Pages** - Pre-rendered static pages for major US metros
- **SEO Optimized** - Unique meta tags, structured data, and sitemaps
- **Dynamic Routing** - `/assisted-living/[state]/[city]`
- **Mobile Responsive** - Beautiful design on all devices
- **Fast Performance** - Static HTML with Next.js 14
- **Auto Sitemap** - Generates on every build

## 📊 Statistics

- **Total Pages**: 89 (84 cities + 5 static)
- **Total Facilities**: 5,600+
- **States Covered**: 26
- **Search Volume**: 50,000+ monthly searches targeted

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Generates all 84 city pages + sitemap
# Output: .next/ directory
```

### Deploy

**Deploy to Vercel** (Recommended):
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🗂️ Project Structure

```
care-connect-nationwide/
├── app/
│   ├── assisted-living/[state]/[city]/page.tsx  # Dynamic city pages
│   ├── sitemap.ts                                # Auto-generated sitemap
│   ├── layout.tsx                                # Root layout
│   └── page.tsx                                  # Homepage
├── components/
│   ├── city/                                     # City page components
│   ├── Header.tsx
│   └── Footer.tsx
├── data/
│   └── cities.json                               # 84 cities database
├── lib/
│   └── cityData.ts                               # Data utilities
├── scripts/
│   └── generate-sitemap.js                       # Sitemap generator
└── public/
    └── sitemap.xml                               # Generated sitemap
```

## 🎯 SEO Strategy

Each city page targets:
- "assisted living in [city]"
- "senior living [city] [state]"
- "assisted living facilities [city]"
- "[city] assisted living cost"

**Expected Results** (6 months):
- 26,000-42,000 organic visits/month
- 520-1,680 leads/month (2-4% conversion)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📈 Features by Page

### City Pages (`/assisted-living/[state]/[city]`)
- Hero section with city-specific data
- Quick statistics dashboard
- Facility listings with filters
- Local area guide
- Cost breakdown by care level
- FAQ section with schema markup
- Related cities recommendations
- CTA section

### Homepage (`/`)
- Problem-Agitate-Solution flow
- Services overview
- How it works
- Testimonials
- Contact form

## 🔧 Configuration

### Update Branding
Edit `template-config.json`:
```json
{
  "site": {
    "name": "Care Connect",
    "domain": "careconnectinc.com"
  },
  "contact": {
    "phone": "(800) 555-CARE",
    "email": "info@careconnectinc.com"
  }
}
```

### Add More Cities
Edit `data/cities.json` and add new city objects:
```json
{
  "city": "Seattle",
  "state": "Washington",
  "stateAbbrev": "WA",
  "slug": "seattle",
  "population": 737015,
  "seniorPopulation": 98000,
  "avgCostLow": 5200,
  "avgCostHigh": 7800,
  "facilityCount": 86,
  "county": "King County",
  "description": "Seattle provides...",
  "neighborhoods": ["Queen Anne", "Capitol Hill", ...]
}
```

Rebuild to generate new pages.

## 📝 Scripts

```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run ESLint
npm run generate-sitemap  # Regenerate sitemap manually
```

## 🌍 Cities Included

**Top 10 Cities**:
1. Phoenix, AZ - 89 facilities
2. Chicago, IL - 156 facilities
3. San Diego, CA - 124 facilities
4. Los Angeles, CA - 245 facilities
5. Dallas, TX - 142 facilities
6. Houston, TX - 178 facilities
7. Philadelphia, PA - 134 facilities
8. San Antonio, TX - 112 facilities
9. San Jose, CA - 98 facilities
10. Austin, TX - 87 facilities

**Plus 74 more cities** across 26 states!

See [SITEMAP-SUMMARY.md](./SITEMAP-SUMMARY.md) for complete list.

## 📄 License

Private - All rights reserved

## 🤝 Support

For questions or support, contact:
- Email: info@careconnectinc.com
- Phone: (800) 555-CARE

---

**Built with ❤️ for Care Connect**

*Helping families find the perfect assisted living community nationwide*
