/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#54FDFF",
        secondary: "#00D2DA",
        tertiary: "#3ABEF9",
        quaternary: "#A7E6FF",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}