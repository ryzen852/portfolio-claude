/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // background: 'var(--background-color)',
        // text: 'var(--text-color)',
        // primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
};
