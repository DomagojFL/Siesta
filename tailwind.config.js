module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      backgroundGradientTop: {
        "gradient-top": "linear-gradient(transparent, #9198e5);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
