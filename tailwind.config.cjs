/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFAFA',
        primary: '#282828',
        secondary: '#FF4C60',
        creme: '#FCE8E6',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },

      screens: {
        xs: '350px',
      },
    },
  },
  plugins: [],
};
