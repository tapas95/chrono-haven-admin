/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Inter', 'sans-serif' ]
      },
      fontSize: {
        body: '1rem'
      },
      lineHeight: {
        base: '1.625rem'
      },
      fontWeight: {
        normal: '400'
      },
      colors:{
        base: '#333333',
        primary: '#006D5B'
      }
    },
  },
  plugins: [],
}

