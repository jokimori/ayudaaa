/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'masas': '#64A8C8',
        'apasionados': '#90B583',
        'academia': '#E8AD38',
        'beige': '#F4F0E6', // Beige background color from the design
      },
    },
  },
  plugins: [],
};
