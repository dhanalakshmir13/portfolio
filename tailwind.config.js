module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: 'oklch(0.592 0.249 0.584)',
        box : 'oklch(0.525 0.223 3.958)',// ✅ Make sure the string is closed properly
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
