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
        'dark-bg': '#02152673' ,
        'dark-card': '#03336e73',
        'dark-accent': '#6EACDA',
        'dark-primary': '#023B61',
        'dark-secondary': '#24567B',
        'dark-border': '#004C8A',
        'dark-text': '#E2E2B6',
        'dark-text-secondary': '#C9D6E3',
        'dark-footer': '#03346E',

        'light-bg': '#f0f4f884',
        'light-card': '#ffffff5f',
        'light-accent': '#FF6F61',
        'light-primary': '#333E50',
        'light-text': '#2E2E2E',   
        'light-secondary': '#5A6978',
        'light-border': '#E0E0E0',
        'light-footer': '#333E50',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(5deg, #03346E 0%, #021526 100%)',
        'gradient-dark-accent': 'linear-gradient(135deg, #6EACDA 0%, #24567B 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(2, 21, 38, 0.9) 0%, rgba(2, 21, 38, 0.6) 100%)',

        'gradient-light-accent': 'linear-gradient(135deg, #F0F4F8 0%, #FFFFFF 100%)',
        'gradient-light': 'linear-gradient(135deg, #FF6F61 0%, #FFA177 100%)',

        'gradient-light-icon':'linear-gradient(145deg, #032f63, #033876)',
      },
      boxShadow: {
        'dark-lg': '0 10px 15px -3px rgba(0, 18, 38, 0.7)',
        'light-lg': '0 0 10px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': ' inset 9px 9px 18px #01152c6d,inset -9px -9px 18px #0552b080',
        'custom-light': 'inset 9px 9px 18px #bfbfbf,inset -9px -9px 18px #ffffff',
      },
      dropShadow: {
        'custom-dark': '0px 4px 12px  #d9d9d9',
        'custom-light': '0px 4px 12px rgb(0, 0, 0)'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
