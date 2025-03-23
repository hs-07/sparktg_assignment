/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b7fb8",
      },
      boxShadow: {
        pagination_shadow: "-1px -3px 10px #8080804d",
      },
    },
  },
  plugins: [],
};
