const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: { enabled: true, content: ['./dist/**/*.html'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        'sans-title': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
