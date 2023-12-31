/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        primary: '#01A7FD',
        grayl: '#F1F1F1',
        graym: '#FAFAFA',
      },
    },
  },
}
