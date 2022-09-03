/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(231, 77%, 90%)",
        secondaryColor: "hsl(0, 0%, 100%)",
        neutralColor: "hsl(230, 35%, 7%)",
      },
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow Condensed", "sans-serif"],
      },
      screens: {
        laptop: "1300px",
        tablet: { min: "480px", max: "767px" },
        mdHeight: { raw: "(min-height:700px)" },
        lgHeight: { raw: "(min-height:850px)" },
      },
    },
  },
  plugins: [],
};
