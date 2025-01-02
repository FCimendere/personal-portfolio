export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lato", "ui-serif"],
      },
      backgroundImage: {
        "inner-circle": "url('/src/assets/profil.png')",
      },
      boxShadow: {
        "custom-out":
          "-10px -10px 15px rgba(224, 225, 221, 1), 10px 10px 10px rgba(27, 38, 59, 0.2), inset -10px -10px 15px rgba(224, 225, 221, 0.5), inset 10px 10px 10px rgba(27, 38, 59, 0.2)",
        "custom-before":
          "-10px -10px 35px rgba(224, 225, 221, 1), 5px 10px 10px rgba(27, 38, 59, 0.2), inset -10px -10px 15px rgba(224, 225, 221, 0.5), inset 10px 10px 30px rgba(27, 38, 59, 0.2)",
      },
      colors: {
        "light-grey": "#e0e1dd",
        "light-blue": "#778da9",
        "mid-blue": "#415a77",
        "dark-blue": "#1b263b",
      },
      rotate: {
        140: "140deg",
        170: "170deg",
      },
    },
  },
  plugins: [],
};
