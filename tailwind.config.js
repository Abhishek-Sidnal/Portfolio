/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with 'class' strategy
  theme: {
    extend: {
      colors: {
        // Custom dark theme colors
        'dark-bg': '#1e1e2f',           // Dark background
        'dark-card': '#2a2a40',         // Dark card background
        'dark-accent': '#ff8c00',       // Accent color (orange)
        'dark-primary': '#5d5fef',      // Primary color (soft blue)
        'dark-secondary': '#8b5cf6',    // Secondary color (purple)
        'dark-border': '#3f3f5f',       // Border color for components
        'dark-text': '#e5e5e5',         // Main text color
        'dark-text-secondary': '#b3b3b3', // Muted text color
        'dark-footer': '#ff8c00',       // Footer background color

        // Light mode colors (optional)
        'light-bg': '#f9f9f9',          // Light background
        'light-card': '#ffffff',        // Light card background
        'light-accent': '#ff8c00',      // Accent color for light mode
        'light-text': '#333333',        // Text color for light mode
      },
      backgroundImage: {
        // Gradients for backgrounds
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #5d5fef 0%, #8b5cf6 100%)', // Primary dark gradient
        'gradient-dark-accent': 'linear-gradient(135deg, #ff8c00 0%, #ffb700 100%)', // Accent gradient
        'gradient-hero': 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 100%)', // Hero section background gradient
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.7)', // Soft shadow for dark mode elements
        'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Lighter shadow for light mode
      },
      dropShadow: {
        'custom-dark': '0 8px 12px rgba(0, 0, 0, 0.75)', // Custom dark drop shadow
        'custom-light': '0 8px 12px rgba(255, 255, 255, 0.25)', // Custom light drop shadow
      },
      spacing: {
        '128': '32rem', // Custom spacing for larger components
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Larger border-radius for buttons and containers
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font-family
        heading: ['Poppins', 'sans-serif'], // Custom heading font
      },
    },
  },
  plugins: [],
}
