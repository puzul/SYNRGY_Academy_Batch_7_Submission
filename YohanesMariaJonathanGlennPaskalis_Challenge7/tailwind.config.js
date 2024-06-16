/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "binar-low": "0 0 4px rgba(0,0,0,.15)",
        "binar-high": "0 0 10px rgba(0,0,0,.15)",
      },
      colors: {
        binar: {
          "dark-blue-5": "#091B6F",
          "dark-blue-4": "#0D28A6",
          "dark-blue-3": "#5E70C4",
          "dark-blue-2": "#AEB7E1",
          "dark-blue-1": "#CFD4ED",
          "lime-green-5": "#3D7B3F",
          "lime-green-4": "#5CB85F",
          "lime-green-3": "#92D094",
          "lime-green-2": "#C9E7CA",
          "lime-green-1": "#DEF1DF",
          "danger": "#FA2C5A",
          "warning": "#F9CC00",
          "sucess": "#73CA5C",
          "neutral-5": "#151515",
          "neutral-4": "#3C3C3C",
          "neutral-3": "#8A8A8A",
          "neutral-2": "#D0D0D0",
          "neutral-1": "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}

