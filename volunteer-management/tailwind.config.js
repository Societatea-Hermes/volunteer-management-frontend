/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#16a34a",

          "secondary": "#978400",

          "accent": "#07b5d5",

          "neutral": "#283027",

          "base-100": "#241515",

          "info": "#0099f2",

          "success": "#58d26a",

          "warning": "#ff9100",

          "error": "#f34465",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}