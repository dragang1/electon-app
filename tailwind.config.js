/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mainBlue': '#003F62',
        'mainOrange': '#EDA415',
        'headingColor': '#1B5A7D',
        'textColor': '#3A3A3A',
        'textWhite': '#fff'
      }
    },
  },
  plugins: [],
}

