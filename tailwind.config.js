/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        low: '#349937',   // green color for low priority
        medium: '#F6AD55', // orange color for medium priority
        high: '#EF4444',   // red color for high priority
      },
    },
  },
  plugins: [require("daisyui")],
}

