/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
        'stars': "url('/src/assets/images/bg-img.jpg')"
    },
    colors:{
      navbar: '#514E4C',
      tealight:'#CFC6C1',
      greybg:'#777777',
      brown:'#443939',
      white:"#FFFFFF",
      lightest:'#FFFFDD',
      black:"#000000",
      purpleLight:"#985AC4",
      darkBlue:"#210070",
      darkestBlue:"#09005C",
      darkPurple:"#2F0048"
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

