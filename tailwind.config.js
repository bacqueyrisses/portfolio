/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/script.js',
],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        'stripe': '0px 2px 2px 1px rgba(0,0,0,0.2);'
      },
    },
  },
  plugins: [],
}
