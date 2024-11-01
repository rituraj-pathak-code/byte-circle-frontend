/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'myshadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px;', // Customize the shadow value here
      },
    },
  },
  plugins: [],
}