/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '470px',
      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
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
