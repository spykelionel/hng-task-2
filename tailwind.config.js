/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
    },
    colors: {
      primary: "#C80001",
      secondary: "#F08000",
    },
  },
  plugins: [],
};
