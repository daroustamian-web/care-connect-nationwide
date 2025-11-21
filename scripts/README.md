# 🛠️ Template Scripts

This folder contains scripts to help you scale this template for multiple sites and programmatic SEO.

## Available Scripts

### 1. `generate-location-pages.js`

**Purpose:** Automatically generate location-based pages for programmatic SEO

**Use Case:**
- Create pages for multiple cities/locations
- Each page customized with local info (phone, address, testimonials)
- Perfect for service providers covering multiple areas

**Usage:**
```bash
node scripts/generate-location-pages.js
```

**What it does:**
1. Creates `locations.json` with sample data (if it doesn't exist)
2. Generates dynamic route at `app/[location]/page.tsx`
3. Creates sitemap.xml with all location URLs
4. Generates robots.txt for search engines

**Customize locations.json:**
```json
[
  {
    "city": "Your City",
    "state": "CA",
    "county": "Your County",
    "phone": "(555) 555-5555",
    "email": "city@example.com",
    "slug": "your-city",
    "zipCodes": ["12345", "12346"],
    "neighborhoods": ["Area 1", "Area 2"]
  }
]
```

**Result:**
- `/san-diego` - San Diego page
- `/los-angeles` - LA page
- `/phoenix` - Phoenix page
- etc.

---

## Creating Your Own Scripts

### Example: Generate Service Pages

Create `generate-service-pages.js`:

```javascript
// Generate pages for each service type
const services = [
  { name: 'Dementia Care', slug: 'dementia-care' },
  { name: '24-Hour Care', slug: '24-hour-care' },
  { name: 'Respite Care', slug: 'respite-care' },
]

// Generate app/services/[service]/page.tsx
// Similar pattern to location pages
```

### Example: Bulk Site Generator

Create `generate-new-site.js`:

```javascript
// Copy template and customize for a new client
// Update all config files
// Generate with client branding
```

---

## Programmatic SEO Strategies

### Strategy 1: Location × Service Matrix

Generate pages for every combination:
- `/san-diego/dementia-care`
- `/san-diego/24-hour-care`
- `/los-angeles/dementia-care`
- `/los-angeles/24-hour-care`

**Implementation:**
```bash
node scripts/generate-location-service-matrix.js
```

### Strategy 2: Neighborhood Pages

Generate ultra-local pages:
- `/san-diego/la-jolla`
- `/san-diego/pacific-beach`
- `/los-angeles/santa-monica`

### Strategy 3: FAQ Pages

Generate SEO-rich FAQ pages:
- `/faq/how-much-does-senior-care-cost`
- `/faq/what-is-respite-care`
- `/faq/medicare-coverage-senior-care`

---

## Best Practices

### 1. Unique Content
Don't just swap city names - add unique:
- Local testimonials
- Area-specific services
- Local imagery
- Neighborhood mentions

### 2. Schema Markup
Add LocalBusiness schema to each location page

### 3. Internal Linking
Link related locations and services together

### 4. Performance
- Use static generation (`generateStaticParams`)
- Optimize images
- Lazy load components

---

## Advanced: Multi-Tenant System

For agencies managing multiple clients:

```javascript
// clients/
//   client-1/
//     config.json
//     locations.json
//   client-2/
//     config.json
//     locations.json

// Generate separate deployments per client
node scripts/generate-client-site.js client-1
```

---

## Questions?

See TEMPLATE-GUIDE.md for more information on using this template system.
