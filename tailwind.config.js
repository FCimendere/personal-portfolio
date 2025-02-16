export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
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
        // Dark mode shadows
        "dark-custom-inset":
          "inset -10px -10px 15px rgba(23, 36, 64, 0.5), inset 10px 10px 10px rgba(19, 33, 59, 0.3)",
        "dark-custom-out":
          "-10px -10px 15px rgba(23, 36, 64, 0.5), 5px 5px 10px rgba(19, 33, 59, 0.3), inset -10px -10px 15px rgba(23, 36, 64, 0.5), inset 10px 10px 10px rgba(19, 33, 59, 0.3)",
        "dark-custom-before":
          "-10px -10px 35px rgba(23, 36, 64, 0.5), 5px 10px 10px rgba(19, 33, 59, 0.3), inset -10px -10px 15px rgba(23, 36, 64, 0.5), inset 10px 10px 30px rgba(19, 33, 59, 0.3)",
      },
      colors: {
        background: "var(--background)",
        badge: "var(--badge)",
        border: "var(--border)",
        section: "var(--section)",
        maincard: "var(--maincard)",
        innercard: "var(--innercard)",
        accent: "var(--accent)",
        maintext: "var(--maintext)",
        midtext: "var(--midtext)",
      },
      rotate: {
        140: "140deg",
        170: "170deg",
      },
    },
  },
  plugins: [],
};
