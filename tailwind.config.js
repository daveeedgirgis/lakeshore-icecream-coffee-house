/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f4edde',
          200: '#e7d7bc',
          300: '#d7bb91',
          400: '#c49966',
          500: '#b8854a',
          600: '#a6713e',
          700: '#8a5a35',
          800: '#704930',
          900: '#5c3d2a',
        },
        cream: {
          50: '#fefcf9',
          100: '#fdf8f1',
          200: '#fbeee1',
          300: '#f7dfc7',
          400: '#f1c89d',
          500: '#e9ac6b',
          600: '#de924a',
          700: '#c17c39',
          800: '#9c6332',
          900: '#7e502b',
        },
        lake: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}