/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          surface: '#f1f5f9',
          border: '#e2e8f0',
        },
        brand: {
          blue: '#2563eb',
          navy: '#1e3a8a',
          sky: '#0284c7',
          indigo: '#4f46e5',
          slate: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -4px rgba(15, 23, 42, 0.08)',
        'elevated': '0 20px 40px -8px rgba(15, 23, 42, 0.12)',
      }
    },
  },
  plugins: [],
}
