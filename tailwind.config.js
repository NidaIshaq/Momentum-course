/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      fontFamily: {
        koulen: ['Koulen', 'sans-serif'],
        meera: ['Meera Inimai', 'serif'],  // Make sure you use the correct font names here
      },
    },
  },
  plugins: [],
}
