const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "game-black": "#000000",
        "game-dark-purple": "#5C2DD5",
        "game-purple": "#7945FF",
        "game-red": "#FD6687",
        "game-yellow": "#FFCE67",
        "game-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
