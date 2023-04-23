/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#9354FD',
      'secondary': '#C8DAFF',
      'tertiary': '#0604C1',
      'quaternary': '#B1F042',
      'quinary': '#E8E8FB',
      'senary': '#FFFFFF',
      'septenary': '#000000',
    },

    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'Syncopate': ['Syncopate']
    },
    backgroundImage: {
      'back': "url('assets/BACKGROUND.png')",
    }
    },
  },
  plugins: [],
}

