const colors = require('tailwindcss/colors')
module.exports = {
  
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      indigo: colors.indigo,
      gray: colors.coolGray,
      red: colors.red,
      black: colors.black,
      blue: colors.blue,
      amber: colors.amber,
      bronze: '#d47b38',
      or: '#F3D617',
      yellow: colors.yellow,
      sky: colors.sky,
      slate: colors.slate,
      green: colors.green
    },
    screens:{
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
    fontFamily: {
     'display': ['Poppins'],
    },
  },
  },
   variants: {
     extend: {
      maxHeight: ['focus'],
     },
   },
 }