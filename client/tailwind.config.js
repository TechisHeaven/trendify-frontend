/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Urbanist", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        base: "1280px",
        xl: "1440px",
      },
      colors: {
        ...colors,
        blue: "#1fb6ff",
        black: "#000000",
        white: "#ffffff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "light-white": "#FBFBFB",
        'container-white': "#F9FAFB",
        "gray-border": "#DEDEDE",
        "gray-dark": "#6B7280",
        gray: "#737373",
        "gray-light": "#A5A5A5",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
