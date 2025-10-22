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
          50: '#fefdf8',
          100: '#fefbf0',
          200: '#fcf6de',
          300: '#f9edbd',
          400: '#f4dd8b',
          500: '#edc55f',
          600: '#d4a943',
          700: '#b18935',
          800: '#906f2f',
          900: '#765c2a',
        },
        coffee: {
          50: '#faf8f4',
          100: '#f4f0e8',
          200: '#e8ddc7',
          300: '#d9c5a0',
          400: '#c5a572',
          500: '#b48d54',
          600: '#9d7347',
          700: '#825c3c',
          800: '#6b4c36',
          900: '#583f2f',
        },
        cream: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fef8d5',
          300: '#fdf2bb',
          400: '#fbe687',
          500: '#f9da53',
          600: '#e0c44b',
          700: '#bba33e',
          800: '#968231',
          900: '#7a6a28',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.15)',
        'hard': '0 10px 40px 0 rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in',
        'slideUp': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(237, 197, 95, 0.1) 0%, rgba(180, 141, 84, 0.1) 100%)",
        'card-pattern': "linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 244, 0.9) 100%)",
      }
    },
  },
  plugins: [],
}