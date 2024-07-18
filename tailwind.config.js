/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors:{
        primary: "#013362",
        secondary: "#C9974C",
        white: "#fff",
        black: "#000",
        gray:{
          100: "#EEEDED",
          200: "#CACACA"
        },
        border: "#666666"
      },
      fontFamily:{
          outfit: ['Outfit', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '360px', 
        'md': '540px', 
        'lg': '768px',
        'xl': '1024px', 
        '2xl': '1280px',
        '3xl': '1440px',
        '4xl': '1600px', 
        '5xl': '1920px', 
=======
      colors: {
        primary: '#013362',
        secondary: '#C9974C',
        white: '#fff',
        black: '#000',
        gray: {
          100: '#EEEDED',
          200: '#CACACA',
        },
        border: '#666666',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '360px',
        md: '540px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
        '3xl': '1440px',
        '4xl': '1600px',
        '5xl': '1920px',
>>>>>>> 3e6d5db (Implement frontend authentication and authorization)
      },
    },
  },
  plugins: [],
};
