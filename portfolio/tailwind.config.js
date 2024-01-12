/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'grid': "url('/assets/svg/grid.svg')",
      },
      colors: {
        'primary': '#11172a', // slate-600
        'primary-light': '#4a5569', // slate-600
        'secondary': '#6c61ea', // indigo-600
        'active': '#afb8c9', // slate-400
      },
    },
  },
  plugins: [],
}

