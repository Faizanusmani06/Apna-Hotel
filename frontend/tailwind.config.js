/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // file types for applying tailwind css(remove all spaces)
  theme: {
    extend: {},
    container : {
      padding : {
        md: "10rem",
      }
    }
  },
  plugins: [],
}

