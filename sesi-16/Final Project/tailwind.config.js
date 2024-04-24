/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
      colors: {
        primary: '#512da8',
        secondary: '#64748b',
        dark: '#0f172a',
        pink: '#BF0E98',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
