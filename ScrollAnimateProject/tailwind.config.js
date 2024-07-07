/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        grow: "grow 0.75s forwards",
        shrink: "shrink 0.75s forwards",
        fadeOut: "fadeOut 0.75s forwards 0.75s", // 0.75s delay to start after grow/shrink
      },
      colors: {
        highTone: "#1ff791",
        midTone: "#0e100b",
        lowTone: "#080906",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
