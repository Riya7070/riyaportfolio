// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#FAF3E0',
        'custom-cream': '#FBEEDB',
        'custom-gold': '#FFD580',
      },
    },
  },
  plugins: [],
}
