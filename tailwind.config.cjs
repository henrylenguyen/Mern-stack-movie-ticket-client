/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "rgba(26, 11, 46, 1)",
        borderPrimary: "#693b93",
        btnSecondary: "rgba(255,255,255,0.2)",
        adminPrimary: "#2B2B4B",
        adminSecondary: "#000033",
        adminThirdary: "#8D91A0",
      },
      flex: {
        100: "1 0 100%",
      },
      fontFamily: {
        bannerFont: "Archivo",
      },
    },
  },
  plugins: [],
};
