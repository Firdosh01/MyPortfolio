/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
  theme: {
    fontFamily: {
      signature: ["Great Vibes"],
    },
    extend: {
      screens: {
        'xsa': {'max': '767px' },
      }

    },
  },
  plugins: [],
}

