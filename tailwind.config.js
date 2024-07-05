/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Corrected the path
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
        },
        border: 'var(--color-border)',
        bgwhite: 'var(--color-bgwhite)',
        textprimary:'var(--color-textprimary)',
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
      },
    },
  },
  plugins: [],
};