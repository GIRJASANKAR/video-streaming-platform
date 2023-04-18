/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xl: { max: '1140px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
    },
    extend: {
      colors:{
        default:'#060d17',
        para:'#b9bdcc'
      },
      width:{
        26:'104px'
      }
    },
  },
  plugins: [],
}

