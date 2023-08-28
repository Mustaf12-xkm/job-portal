/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vvsm':'200px',
        'vsm':'400px',
        'sm': '640px',     // Small screens (e.g., mobile devices)
        'md': '768px',     // Medium screens (e.g., tablets)
        'lg': '1024px',    // Large screens (e.g., small laptops)
        'xl': '1280px',    // Extra-large screens (e.g., large laptops)
      },
    },
  },
  plugins: [],
}
