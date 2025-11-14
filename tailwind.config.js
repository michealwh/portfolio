import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      colors: {
        secondary: "#b558ea",   // purple
        yellow: "#ead958" // yellow
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
    
  },
  darkMode: "class",
  plugins: [heroui({
    theme: {
        colors: {
           "--color-primary": "#fff022",
          "--color-secondary": "#22C55E",
        },
      },
    
  })],
}

module.exports = config;