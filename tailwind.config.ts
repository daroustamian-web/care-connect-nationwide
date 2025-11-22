import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A5FE1',
          light: '#E8EFFE',
          dark: '#3849C2',
        },
        navy: {
          DEFAULT: '#1B2B4F',
          dark: '#0F1A32',
        },
        cream: '#FDF9F5',
        beige: '#F5F1ED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
