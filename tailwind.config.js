module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [/^right-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [],
};
