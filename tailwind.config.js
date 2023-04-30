/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        green: {
          DEFAULT: "#71B214",
        },
        gray: {
          600: "#606060",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans, "DM Sans"],
        "banner-head": ["Montserrat", "cursive"],
        dmserif: ["DM Serif", "serif"],
        proza: ["Proza Libre", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        banner: "url(./assets/img/Banner1.jpeg)",
      },
      screens: {
        xsm: { max: "400px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
