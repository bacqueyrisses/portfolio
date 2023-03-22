/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "535px",
      md: "860px",
      lg: "1440px",
    },
    extend: {
      colors: {
        primary: "black",
        secondary: "#e1e6de",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
  darkMode: "class",
};
