/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_navy: "#1A2A33",
        semi_dark_navy: "#1F3641",
        silver: "#A8BFC9",
        light_blue: "#31C3BD",
        light_blue_hover: "#65E9E4",
        light_yellow: "#F2B137",
        light_yellow_hover: "#FFC860"
      }
    },
  },
  plugins: [],
}
