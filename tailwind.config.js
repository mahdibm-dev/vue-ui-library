/** @type {import('tailwindcss').Config} */
import theme from 'tailwindcss/defaultTheme'
export default {
  important: true,
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-50': '#eafef1',
        'primary-200': '#94f3da',
        'primary-600': '#026e78',
        'primary-700': '#015364',
        'primary-800': '#003c51',
        secondary: '#375467',
        'secondary-tint': '#9BA9B3',
        'secondary-dark': '#052941',
        gray: '#d0d5dd',
        success: '#06D1C2',
        'success-tint': '#E6FAF9',
        'success-dark': '#047D74',
        info: '#2C73D9',
        'info-tint': '#ABC7F0',
        'info-dark': '#1A4582',
        warning: '#FFAF00',
        'warning-tint': '#FFF7E6',
        error: '#FF6682',
        'error-tint': '#FFF0F3',
        'error-dark': '#993D4E'
      },
      fontFamily: {
        roboto: ['Roboto', ...theme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
