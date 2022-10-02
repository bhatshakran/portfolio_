/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPink: '#FFCACA',
        lighPink: '#FFECEF',
        purple: '#251b37',
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
