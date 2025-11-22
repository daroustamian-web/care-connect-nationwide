/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // A Place for Mom style colors
        primary: {
          DEFAULT: '#4A6FA5', // Soft blue
          light: '#E8F0FE',
          dark: '#1B3A5F', // Navy
        },
        cream: '#F9F7F4', // Warm cream background
        beige: '#F5F3F0',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
