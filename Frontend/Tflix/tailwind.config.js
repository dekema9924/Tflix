/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '1023px'},
      'md': {'min': '1224px'}
   
    },
  },
  plugins: [],
}

