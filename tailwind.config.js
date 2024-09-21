/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      // sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"992px",
      '2xl':"1180px"
    },
    container:{
      center:true,
      padding:{
        DEFAULT: "16px",
        md: "32px"
      }
    },
    extend: {},
  },
  plugins: [],
}

