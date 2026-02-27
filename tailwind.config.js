/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFFFF',
          100: '#F7F8FA',
          200: '#F1F3F7',
          300: '#E6EAF0',
          400: '#D9DEE7',
          500: '#C5CBD6',
          600: '#9FA7B5',
          700: '#6B7280',
          800: '#374151',
          900: '#1F2937',
          950: '#111827',
        },
        accent: {
          50: '#EAF5F5',
          100: '#E2F1F2',
          200: '#D6EEEE',
          300: '#C9E9EA',
          400: '#BAE2E4',
          500: '#8FD0D6',
          600: '#5BBBC4',
          700: '#3D9BAA',
          800: '#1CA6AF',
          900: '#147F8A',
          950: '#0E5F68',
        },
        accent_warm: {
          50: '#FFF6E9',
          100: '#FDEDD3',
          300: '#F7C27A',
          500: '#F2A347',
          700: '#C97A1F',
        },
      },
    },
  },
  plugins: [],
};
