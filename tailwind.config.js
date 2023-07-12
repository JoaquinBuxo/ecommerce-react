/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui, aspectRatio],
};
