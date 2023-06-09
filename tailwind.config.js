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
        ground: {
          100: "#ffe5c0",
          200: "#f3cc87",
          300: "#eb853a",
          500: "#d05507",
          600: "#ec9b40",
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
        xsm: { max: "420px" },
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
