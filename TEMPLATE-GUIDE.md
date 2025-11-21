# 🎨 Senior Care Landing Page Template

This is a reusable template for creating premium senior care landing pages. Use it to quickly spin up new sites for different locations, services, or clients.

## 🚀 Quick Start - Creating a New Site

### Method 1: Use GitHub Template (Recommended)
1. Make this repo a GitHub template in settings
2. Click "Use this template" to create a new repository
3. Clone and customize

### Method 2: Manual Clone
```bash
# Clone this repository
git clone <this-repo-url> new-site-name
cd new-site-name

# Remove old git history
rm -rf .git
git init

# Run setup script
chmod +x setup-new-site.sh
./setup-new-site.sh "Business Name" "City, State" "(555) 555-5555" "email@site.com"

# Install and run
npm install
npm run dev
```

## 📝 Customization Checklist

### 1. Basic Information (`template-config.json`)
- [ ] Business name
- [ ] Location/service area
- [ ] Phone number
- [ ] Email address
- [ ] Brand colors
- [ ] SEO metadata

### 2. Content Updates

#### `components/Header.tsx`
- [ ] Update business name in logo
- [ ] Update navigation links

#### `components/Hero.tsx`
- [ ] Update headline and subheadline
- [ ] Update contact card information
- [ ] Replace hero image URL

#### `components/Footer.tsx`
- [ ] Update company name
- [ ] Update contact information
- [ ] Update social media links
- [ ] Update copyright year

#### `app/layout.tsx`
- [ ] Update page title
- [ ] Update meta description
- [ ] Update keywords

### 3. Images
Replace Unsplash URLs with your own images:
- `Hero.tsx` - Hero image
- `ProblemSection.tsx` - Problem image
- `SolutionSection.tsx` - Solution image

### 4. Services
Edit `components/ServicesSection.tsx`:
- [ ] Update service names
- [ ] Update descriptions
- [ ] Change icons if needed

### 5. Testimonials
Edit `components/TestimonialsSection.tsx`:
- [ ] Replace with real testimonials
- [ ] Update customer names and locations

### 6. Colors & Branding
Edit `tailwind.config.ts`:
```javascript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
    light: '#YOUR_LIGHT_COLOR',
    dark: '#YOUR_DARK_COLOR',
  },
}
```

## 🎯 Use Cases

### Use Case 1: Multiple Location Sites
Create separate sites for each city:
- eldercare-sandiego.com
- eldercare-losangeles.com
- eldercare-phoenix.com

**Changes needed per site:**
- Location name in all components
- Phone numbers (local)
- Testimonials (location-specific)
- Images (if location-specific)

### Use Case 2: Different Service Types
Use template for various care types:
- Senior care
- Memory care
- Pediatric care
- Disability support

**Changes needed:**
- Hero headline and copy
- Services section
- Problem/Solution content
- Images

### Use Case 3: White Label for Agencies
Customize for different clients:
- Agency branding
- Client contact info
- Client testimonials
- Custom colors

## 🔧 Programmatic SEO Strategy

### For Location-Based Pages

Create a data file `locations.json`:
```json
[
  {
    "city": "San Diego",
    "state": "CA",
    "phone": "(619) 555-0123",
    "email": "sandiego@care.com",
    "slug": "san-diego"
  },
  {
    "city": "Los Angeles",
    "state": "CA",
    "phone": "(213) 555-0123",
    "email": "la@care.com",
    "slug": "los-angeles"
  }
]
```

Then create dynamic routes in Next.js:
```
app/[location]/page.tsx
```

### For Service-Based Pages

Create `services.json` and generate pages for:
- /dementia-care
- /24-hour-care
- /respite-care
- etc.

## 📦 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 3: Docker
```bash
docker build -t senior-care-site .
docker run -p 3000:3000 senior-care-site
```

## 🔄 Keeping Template Updated

### As a Template Creator:
1. Make improvements to the original template
2. Tag versions: `git tag v1.0.0`
3. Document changes in CHANGELOG.md

### As a Template User:
```bash
# Add original template as remote
git remote add template <template-repo-url>

# Fetch updates
git fetch template

# Merge updates (carefully!)
git merge template/main
```

## 📊 Analytics & Tracking

### Add Google Analytics
Edit `app/layout.tsx`:
```javascript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### Add Facebook Pixel
```javascript
<Script id="facebook-pixel">
  {`!function(f,b,e,v,n,t,s)...`}
</Script>
```

## 🎨 Design Variations

### Change Color Scheme
Popular alternatives:
- **Healthcare Blue**: `#0066CC` (trust, calm)
- **Warm Orange**: `#FF6B35` (friendly, energetic)
- **Forest Green**: `#2D6A4F` (health, nature)
- **Deep Purple**: `#7C3AED` (current - premium, caring)

### Typography Options
Edit `app/globals.css`:
- Inter (current) - Modern, clean
- Poppins - Friendly, rounded
- Montserrat - Professional, geometric
- Open Sans - Readable, versatile

## 🛠️ Advanced Customization

### Add CMS Integration
Consider adding:
- **Contentful** - For content management
- **Sanity** - For structured content
- **WordPress** (headless) - If client prefers WordPress

### Add Booking System
Integrate:
- Calendly
- Acuity Scheduling
- Custom booking form → API

### Add Chat Widget
- Intercom
- Drift
- Tawk.to (free)

## 📈 SEO Optimization

### Per-Site Checklist
- [ ] Update sitemap.xml
- [ ] Add robots.txt
- [ ] Configure Open Graph tags
- [ ] Add structured data (JSON-LD)
- [ ] Set up Google Search Console
- [ ] Configure canonical URLs
- [ ] Add alt text to all images

### Local SEO for Location Sites
- [ ] Add Google Business Profile
- [ ] Include local schema markup
- [ ] Use location-specific keywords
- [ ] Add local business schema

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Issues
```bash
# Regenerate Tailwind
npx tailwindcss -o app/globals.css
```

### Type Errors
```bash
# Regenerate TypeScript declarations
npx tsc --noEmit
```

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Template Repository](link-to-your-template-repo)

---

**Need help?** Create an issue in the template repository or contact the template creator.

**Built with ❤️ for senior care providers everywhere**
