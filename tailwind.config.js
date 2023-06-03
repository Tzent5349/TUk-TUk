/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      backgroundImage:{
        'AboutBack' : "url('../public/assets/images/allIn.jpg')"
      },
      
      fontFamily:{
/*         'openSans' : ['OpenSans', ''], */
        'moon': ["moon" , "heavy"]
      }
      ,
      colors:{
        'primary': "#457b9d",
        'secondary': "#1d3557",
        'neutral': "#f1faee",
        'neutral-2': "#a8dadc",
        'action': "#e63946"
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2 :{
          '0%' : {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(0%)'},

        },
      },
    }
  },
  plugins: [],
}