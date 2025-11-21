# ElderCare San Diego - Premium Senior Care Landing Page

A beautiful, modern landing page for in-home senior care services in San Diego County. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Premium Purple Color Scheme**: Primary purple (#7C3AED), lavender (#EDE9FE), and cream (#F5F3F0)
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Smooth Animations**: Elegant scroll animations powered by Framer Motion
- **Modern UI Components**: Cards, buttons, and forms with polished interactions
- **Sticky Header**: Clean navigation that appears on scroll
- **Contact Integration**: Phone, email, and location quick-access cards

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- Git installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Chula-Vista
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Tech Stack

- **Framework**: Next.js 14.2.0 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11.0
- **Icons**: Lucide React 0.344
- **Images**: Next.js Image optimization with Unsplash integration

## 📂 Project Structure

```
Chula-Vista/
├── app/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Header.tsx         # Sticky navigation header
│   ├── Hero.tsx           # Hero section with contact cards
│   ├── ProblemSection.tsx # Problem awareness section
│   ├── AgitateSection.tsx # Pain points section
│   ├── SolutionSection.tsx # Solution presentation
│   ├── ServicesSection.tsx # Services grid
│   ├── HowItWorksSection.tsx # 4-step process
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── BookingSection.tsx # Appointment booking
│   ├── ContactForm.tsx    # Contact form with validation
│   └── Footer.tsx         # Site footer
├── types/
│   └── index.ts           # TypeScript type definitions
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Sections

1. **Hero Section**: Eye-catching introduction with CTA and contact cards
2. **Problem Section**: Addresses caregiver burnout and stress
3. **Agitate Section**: Highlights the emotional and financial toll
4. **Solution Section**: Presents the in-home care service as the answer
5. **Services Section**: 6 service cards (Companion, Personal, Dementia, Respite, 24-Hour, Veterans)
6. **How It Works**: 4-step onboarding process
7. **Testimonials**: Social proof from San Diego families
8. **Booking Section**: Multiple contact options
9. **Contact Form**: Lead capture with validation
10. **Footer**: Links, contact info, and social media

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#7C3AED',  // Main purple
    light: '#EDE9FE',    // Light lavender
    dark: '#6D28D9',     // Dark purple
  },
  cream: '#F5F3F0',      // Background cream
  beige: '#F5F3F0',      // Alternative background
}
```

### Content

All content is embedded in the components. To update:

- **Contact Info**: Edit contact arrays in `Hero.tsx` and `BookingSection.tsx`
- **Services**: Modify the services array in `ServicesSection.tsx`
- **Testimonials**: Update testimonials array in `TestimonialsSection.tsx`
- **Copy**: Edit text directly in each component file

### Images

Images are sourced from Unsplash. To change:

1. Update the `src` prop in Image components
2. Ensure new domains are added to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com', 'your-domain.com'],
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Form Handling

The contact form includes:
- Client-side validation
- Error messages
- Loading states
- Success confirmation

**Note**: Form currently simulates submission. To integrate with a backend:

1. Replace the simulation in `ContactForm.tsx` with your API call:

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

2. Create an API route at `app/api/contact/route.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on all images
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Or use the `.next` directory with your preferred hosting platform.

## 📄 License

Copyright © 2025 ElderCare San Diego. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: care@yoursite.com
- Phone: (619) 555-0123

---

Built with ❤️ for families in San Diego County
