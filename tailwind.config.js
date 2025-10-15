/** @type {import('tailwindcss').Config} */
export default {
  // Tells Tailwind to scan all files in the 'src' folder
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
