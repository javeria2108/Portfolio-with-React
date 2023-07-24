/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      navbar: '#514E4C',
      tealight:'#CFC6C1',
      greybg:'#777777',
      brown:'#443939',
      white:"#FFFFFF",
      lightest:'#FFFFDD'
    },
    fontFamily:{
      helvetica:['helvetica','sans-serif'],
      laBelle:['LaBelle'],
      coolvetica:['Coolvetica'],
    },
    extend: {},
  },
  plugins: [],
}

