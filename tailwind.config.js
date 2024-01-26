/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b8e2de",
        secondary: "##2BA89D",
      },
      listStyleImage: {
        Icon: 'url("../../assests/images/Banner-icon.svg")',
      },
    },
  },
  plugins: [],
};
