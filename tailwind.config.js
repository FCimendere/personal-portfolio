export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      fontFamily: {
        display: ["Lato", "ui-serif"],
      },
      boxShadow: {
        "custom-inset":
          "inset -10px -10px 15px rgba(224, 225, 221, 0.5), inset 10px 10px 10px rgba(27, 38, 59, 0.2)",
        "custom-out":
          "-10px -10px 15px rgba(224, 225, 221, 0.5), 5px 5px 10px rgba(27, 38, 59, 0.2), inset -10px -10px 15px rgba(224, 225, 221, 0.5), inset 10px 10px 10px rgba(27, 38, 59, 0.2)",
        "custom-before":
          "-10px -10px 35px rgba(224, 225, 221, 0.5), 5px 10px 10px rgba(27, 38, 59, 0.2), inset -10px -10px 15px rgba(224, 225, 221, 0.5), inset 10px 10px 30px rgba(27, 38, 59, 0.2)",
      },
      colors: {
        "light-grey": "#fbfcfa",
        "light-blue": "#778da9",
        "mid-blue": "#415a77",
        "dark-blue": "#4079ff",
        "accent-color": "#5ce1e6",
      },
      rotate: {
        140: "140deg",
        170: "170deg",
      },
    },
  },
  plugins: [],
};
