const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      background: colors.white,
      text: colors.black,
      hover: '#00000030',
      transparent: '#00000000',
      
      primary: {
        DEFAULT: colors.blue[800],
        hover: '#00000030',
        text: colors.white,
      },
      secondary: {
        DEFAULT: colors.blue[500],
        hover: '#00000030',
        text: colors.white,
      },
      accent: {
        DEFAULT: colors.blue[700],
        hover: colors.blue[600],
        text: colors.gray[700],
      },
      success: {
        DEFAULT: colors.green[500],
        dark: colors.green[600],
        darker: colors.green[700],
      },
      danger: {
        DEFAULT: colors.red[600],
        dark: colors.red[700],
        darker: colors.red[800],
      },
    },
  },

  plugins: [],
}

