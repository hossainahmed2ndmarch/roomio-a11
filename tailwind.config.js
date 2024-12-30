/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["Marcellus", "serif"],
      },
      colors: {
        primary: "#54644c", // Olive green
        blackLight:"#5c4b51",
        secondary: "#bc9c74", // Beige gold
        light: "#ffffff", // White
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
