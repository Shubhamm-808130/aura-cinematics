/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fef5d6',
          200: '#fde7a8',
          300: '#fbd471',
          400: '#f8ba39',
          500: '#e59e19',
          600: '#c87c10',
          700: '#9d580f',
          800: '#814614',
          900: '#6d3915',
        },
        luxury: {
          black: '#0c0a09',
          dark: '#171412',
          card: '#1f1a17',
          border: '#332b25',
          muted: '#a89f91',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
