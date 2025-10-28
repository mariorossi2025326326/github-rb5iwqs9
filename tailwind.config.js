/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'logo-orange': {
          DEFAULT: '#F5A623',
          50: '#FEF7EC',
          100: '#FDEFD8',
          200: '#FBDFB1',
          300: '#F9CF8A',
          400: '#F7BE63',
          500: '#F5A623',
          600: '#E89007',
          700: '#B77006',
          800: '#865104',
          900: '#553302',
        },
      },
    },
  },
  plugins: [],
};
