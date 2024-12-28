export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "inner-circle": "url('/src/assets/profil.png')",
      },
      boxShadow: {
        "custom-outer":
          "-10px -10px 15px rgba(255, 255, 255, 1), 10px 10px 10px rgba(0, 0, 0, 0.2), inset -10px -10px 15px rgba(255, 255, 255, 0.5), inset 10px 10px 10px rgba(0, 0, 0, 0.2)",
        "custom-outer:before":
          "-10px -10px 35px rgba(255, 255, 255, 1),5px 10px 10px rgba(0, 0, 0, 0.2),inset -10px -10px 15px rgba(255, 255, 255, 0.5),inset 10px 10px 30px rgba(0, 0, 0, 0.2);",
      },
    },
    colors: {
      "light-grey": "#edf6f9",
      "light-blue": "#778da9",
      "mid-blue": "#0415a77",
      "darkened-blue": "#1b263b",
    },
  },
  plugins: [],
};
