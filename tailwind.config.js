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
        // Professional Darkest Bluish Color Palette for Dark Mode
        'dark-bg': '#021526',           // Very dark blue background
        'dark-card': '#03346E',         // Dark blue card background
        'dark-accent': '#6EACDA',       // Accent color (light blue)
        'dark-primary': '#023B61',      // Primary color (darker blue)
        'dark-secondary': '#24567B',    // Secondary color (muted dark blue)
        'dark-border': '#004C8A',       // Border color for components
        'dark-text': '#E2E2B6',         // Primary text color (light beige)
        'dark-text-secondary': '#C9D6E3', // Muted secondary text color
        'dark-footer': '#03346E',       // Footer background color

        // Professional Light Mode Colors
        'light-bg': '#F0F4F8',          // Light grayish-blue background
        'light-card': '#FFFFFF',        // White card background
        'light-accent': '#FF6F61',      // Accent color (soft coral)
        'light-primary': '#333E50',     // Dark text in light mode
        'light-text': '#2E2E2E',        // Primary text color (dark gray)
        'light-secondary': '#5A6978',   // Muted secondary text color (grayish blue)
        'light-border': '#E0E0E0',      // Light border color for components
        'light-footer': '#333E50',      // Dark footer background color
      },
      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #03346E 0%, #021526 100%)', // Dark gradient
        'gradient-dark-accent': 'linear-gradient(135deg, #6EACDA 0%, #24567B 100%)', // Accent gradient
        'gradient-hero': 'linear-gradient(180deg, rgba(2, 21, 38, 0.9) 0%, rgba(2, 21, 38, 0.6) 100%)', // Hero section background gradient

        // Light mode gradients
        'gradient-light': 'linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 100%)', // Light gradient
        'gradient-light-accent': 'linear-gradient(135deg, #FF6F61 0%, #FFA177 100%)', // Accent gradient for light mode
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 18, 38, 0.7)', // Soft shadow for dark mode elements
        'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',  // Lighter shadow for light mode
      },
      dropShadow: {
        'custom-dark': '0 1px 20px rgba(0, 0, 240, 0.95)',  // Custom dark drop shadow
        'custom-light': '0 1px 20px rgba(10, 10, 10, 0.95)', // Custom light drop shadow
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
