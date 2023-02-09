/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "535px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
