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
        primary: "#28282b",
        secondary: "#e1e6de",
      },
      backgroundImage: {
        gradient1: "url('/images/gradient1.webp')",
        gradient2: "url('/images/gradient2.webp')",
        gradient3: "url('/images/gradient3.webp')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
