/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      contrast: "hsl(146, 68%, 55%)",
      dark: "hsl(232, 19%, 15%)",
      primaryDark: "#353C4D",
      primaryLight: "#9CA3AF",
      light: "hsl(225, 100%, 98%)",
    },
    fontFamily: {
      primary: ["Inter"],
    },
    plugins: [],
  },
};
