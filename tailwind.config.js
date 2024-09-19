/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        pink: {
          200: '#fbcfe8',
          500: '#ec4899',
        },
        cyan: {
          200: '#a5f3fc',
          500: '#06b6d4',
          600: '#0891b2',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
          800: '#3730a3',
        },
        yellow: {
          400: '#facc15',
        },
      },
    },
  },
  plugins: [],
}