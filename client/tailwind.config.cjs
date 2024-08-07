module.exports = {
  content: [
    "./*.{html,js,jsx,ts}",
    "./public/*.html",
    "./src/**/*.{html,js,jsx,css}",
    "./src/**/**/*.{html,js,jsx,css}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
