const { default: plugin } = require("tailwindcss");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" , './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      modifierTransition: 'background 0.01s',
      activeTransition: 'background 0.01s',
      darken: 0.1
    }),
    extend: {
      backgroundImage: {
        'blue_purple_grad': "linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%)",
        "bg2" : "radial-gradient(at right bottom, rgb(192, 38, 211), rgb(253, 186, 116), rgb(147, 51, 234))",
        "bg3" : "radial-gradient(at center center, rgb(192, 132, 252), rgb(126, 34, 206), rgb(107, 33, 168))"
      },
      colors:{
        baby_orange : "#ffae84",
        baby_purple : "#b591fd",
        baby_yellow : "#ffdd87",
        baby_light_orange : "#ffeadf", 
        baby_light_purple : "#e8dfff",
        baby_light_yellow : "#fef4de",
        baby_blue : "#4d70fd",
        baby_light_blue : "#4c6fff",
        baby_blue_links : "#3252a9",
        baby_blue_bg : "#f2f8ff",
        baby_blue_bg_2 : "#d2dbff"
      },
      fontFamily : {
        "Baby_Barlow": ['Barlow', 'sans-serif'],
        "Baby_Inter": ['Inter', 'sans-serif'],
        "Baby_Nunito": ['Nunito', 'sans-serif'],
        "Baby_PlayFair": ['Playfair Display', 'serif'],
        "Baby_PtSherif": ['PT Serif', 'serif'],
        "Baby_Roboto": ['Roboto', 'sans-serif'],
        "Baby_Urbanist": ['Urbanist', 'sans-serif'],
        "dancing": ['Dancing Script', 'cursive'],
        "pop": ['Poppins', 'sans-serif'],
        "open_sans": ['Open Sans', 'sans-serif'],
        "archivo": ['Archivo Black', "sans-serif"],
        "courgette": ['Courgette', "cursive"],
        "greate": ['Great Vibes', "cursive"],
        "lobster": ['Lobster', "cursive"],
        "pacifico": ['Pacifico', "cursive"],
        "playtome": ['Paytone One', "sans-serif"],
        "russo": ['Russo One', "sans-serif"],
        "roman": ['Gideon Roman', "cursive"]
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}