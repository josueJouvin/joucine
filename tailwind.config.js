/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cine: '#0f1115',
        navMovil: '#FFFFFE',
        header: '#111317',
        buttons: 'hsla(225,13%,18%,1)',
        titles: 'hsla(230,10%,60%,1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
