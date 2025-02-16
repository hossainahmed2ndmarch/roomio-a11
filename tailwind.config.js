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
        primary: "var(--primary-text-color)", // Dynamic Primary Text
        blackLight: "var(--secondary-text-color)", 
        fixedOlive: "#54644c",
        fixedBlackLight: "#5c4b51",
        secondary: "#bc9c74", // Beige gold
        light: "#ffffff", // White
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
