/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#c4b5fd",
        tertiary: "#1e3a8a",
        "black-100": "#090325",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
          "primary": "linear-gradient(to right, #6b1f7b, #3b0a77, #1e3a8a)", 

      },
    },
  },
  plugins: [],
};