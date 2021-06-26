module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(153, 153, 153, 0.9), rgba(41, 41, 41, 0.9)), url('components/images/movies-night.jpg')",
      },
      opacity: ["disabled"],
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
    textColor: ["responsive", "hover", "focus", "active", "disabled"],
  },
  plugins: [],
};
