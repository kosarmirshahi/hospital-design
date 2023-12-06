/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-btn": "#FC724D",
      },
      spacing: {
        350: "350px",
      },
    },
  },
  plugins: [],
};
