/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "535px",
      md: "960px",
      lg: "1440px",
    },
    extend: {
      colors: {
        secondary: "#e1e6de",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
