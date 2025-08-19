/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mia-red': '#DC2626',
        'mia-dark-red': '#B91C1C',
        'mia-light-red': '#FEE2E2',
        'mia-white': '#FFFFFF',
        'mia-black': '#111827',
        'mia-gray': '#6B7280',
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
