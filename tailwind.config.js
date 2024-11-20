/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          gold: '#D4AF37',
          champagne: '#F7E7CE',
          burgundy: '#800020',
          charcoal: '#36454F',
          cream: '#FFFDD0',
          bronze: '#CD7F32',
          pearl: '#F0EAD6',
          slate: '#1B1B1E'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      letterSpacing: {
        luxury: '0.075em'
      }
    },
  },
  plugins: [],
};