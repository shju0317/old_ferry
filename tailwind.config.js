/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['SUIT Variable']
      },
      color: {
        orange1: "#F2782A",
        orange2: "#FF9140",
        yellow: "#F4A330",
      }
    },
  },
  plugins: [],
};