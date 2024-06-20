/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge:["./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./index.html",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

