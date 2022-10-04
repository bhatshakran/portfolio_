/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'grey',
        secondary: '#ffffff',
        background: 'black',
      },
      fontFamily: {
        qaligo: ['Qaligo', 'sans-serif'],
        wavenhausbold: ['Wavenhaus Bold', 'mono'],
        wavenhaussemibold: ['Wavenhaus Semibold', 'mono'],
        wavenhausextrabold: ['Wavenhaus Extrabold', 'mono'],
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
