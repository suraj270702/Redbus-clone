/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      underlineColor: {
        'red': '#ff0000', // Replace with your desired red color
      },
    },
  },
  plugins: [],
};
