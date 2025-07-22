/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
// const plugin = require('tailwindcss/plugin');

module.exports = {
  // ...defaultConfig,
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",

    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],

  theme: {
    // ...defaultConfig.theme,
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "monospace"],
        anton: ["Anton", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        // ...defaultConfig.theme.extend.colors,
        "brutal-black": "#000000",
        "brutal-white": "#FFFFFF",
        "brutal-red": "#FF0000",
        "brutal-yellow": "#FFFF00",
        "brutal-blue": "#0000FF",
        "brutal-green": "#00FF00",
        "brutal-pink": "#FF00FF",
        "brutal-orange": "#FF8000",
        "brutal-purple": "#8000FF",
        // Dark theme colors
        "dark-bg": "#0a0a0a",
        "dark-surface": "#1a1a1a",
        "dark-text": "#e0e0e0",
        // Light theme colors
        "light-bg": "#f5f5f5",
        "light-surface": "#ffffff",
        "light-text": "#2a2a2a",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        glitch: "glitch 0.3s infinite",
        shake: "shake 0.5s infinite",
        "pulse-brutal": "pulse-brutal 2s infinite",
        "theme-switch": "theme-switch 0.8s ease-in-out",
        "sun-rise": "sun-rise 0.8s ease-out",
        "moon-rise": "moon-rise 0.8s ease-out",
        "stars-twinkle": "stars-twinkle 2s infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        "pulse-brutal": {
          "0%, 100%": {
            transform: "scale(1)",
            backgroundColor: "#000000",
          },
          "50%": {
            transform: "scale(1.05)",
            backgroundColor: "#FF0000",
          },
        },
        "theme-switch": {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "50%": { transform: "scale(0.8) rotate(180deg)", opacity: "0.5" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "1" },
        },
        "sun-rise": {
          "0%": { transform: "translateY(100px) scale(0)", opacity: "0" },
          "50%": { transform: "translateY(0) scale(1.2)", opacity: "0.8" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        "moon-rise": {
          "0%": { transform: "translateY(-100px) scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "translateY(0) scale(1.2) rotate(180deg)", opacity: "0.8" },
          "100%": { transform: "translateY(0) scale(1) rotate(360deg)", opacity: "1" },
        },
        "stars-twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
    
  },
  // plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
