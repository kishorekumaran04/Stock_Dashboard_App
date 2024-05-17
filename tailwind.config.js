/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none"
      },
      borderWidth: {
        1: "1px"
      },
      fontFamily: {
        quickSand: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

