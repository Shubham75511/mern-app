/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A7C1A8",
        secondary: "#D1D8BE",
        background: "#EEEFE0",
        textMain: "#819A91",
        accent: "#333446",
      },
    },
  },
  plugins: [
  ],
};
