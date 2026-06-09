/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#151515",
          900: "#24211f",
          700: "#504b46",
          500: "#827970",
        },
        meadow: {
          600: "#2f8f6b",
          500: "#40a77f",
          100: "#dff3eb",
        },
        coral: {
          500: "#e8684a",
          100: "#fde4dc",
        },
        skywash: "#e9f4f7",
        paper: "#fbfaf7",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(21, 21, 21, 0.08)",
      },
    },
  },
  plugins: [],
};
