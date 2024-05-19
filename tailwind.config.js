/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#13F3A7',
        'custom-light-green': '#0FE1C2',
      },
    },
  },
  plugins: [],
}