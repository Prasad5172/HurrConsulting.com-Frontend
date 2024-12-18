/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif Display', 'serif'], // Add the font to the theme
      },
    },
  },
  plugins: [],
}