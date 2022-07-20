/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    '/src/script.js',
    'anime.min.js'
],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'boska': ['Boska', 'serif'],
        'cabinet': ["'Cabinet Grotesk'", 'sans-serif']
      },
      backgroundImage: {
        'gradient': "url('/ressources/tw-gradient.png')",
        'gradient2':"url('/ressources/tw-gradient-two.jpg')",
      },
      boxShadow: {
        'stripe': '0px 2px 2px 1px rgba(0,0,0,0.2);'
      },
    },
  },
  plugins: [],
}
