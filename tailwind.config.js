/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        high: 'text-red-600', // Define classes for each priority level
        medium: 'text-yellow-500',
        low: 'text-green-400',
      },
    },
  },
  plugins: [require("daisyui")],
}

