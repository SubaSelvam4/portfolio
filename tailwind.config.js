const { TbBackground } = require('react-icons/tb');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary' : 'rgb(255, 99, 132)',
        'secondary': 'rgb(85, 81, 227)',

      }
    },
    fontFamily: {
      'hero-font' : 'Acme'
    }
  },
  plugins: [],
}

