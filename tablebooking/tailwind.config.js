/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // Add a custom breakpoint for 320px
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },      
      colors: {
        primary: "#f97316",
        
      },
      fontFamily:{
        sans:["Poppins","sans-serif"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        },
      },
      animation:{
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          from:{
            transform:"rotate(0deg)"
          },
          to:{
            transform:"rotate(360deg)"
          }
        }
      },
     
      backgroundImage: {
        'custom-bg': "url('../../assets/table.jpg')", // Example custom background image
      },

  },
  
  
},
variants: {},
plugins:[],
}

