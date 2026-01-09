/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFBF5',
          100: '#FFF7EB',
          200: '#FFEFD6',
          300: '#FFE7C2',
          400: '#FFD89E',
          500: '#FFC97A',
        },
        gold: {
          100: '#F5EFE0',
          200: '#E8D5B5',
          300: '#D4AF76',
          400: '#C19653',
          500: '#B8860B',
        },
        offwhite: '#FAF9F6',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
