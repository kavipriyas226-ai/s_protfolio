/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#101216', // Deep charcoal
          text: '#F5F6F7', // Primary text
        },
        secondary: {
          bg: '#181B20', // Secondary background
          text: '#A8ADB5', // Secondary text
        },
        accent: {
          DEFAULT: '#5797D5', // Metallic blue
        },
        border: {
          DEFAULT: '#343942', // Borders
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'blueprint-grid': '40px 40px',
      }
    },
  },
  plugins: [],
}
