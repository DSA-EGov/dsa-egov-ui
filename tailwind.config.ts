import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,css,scss,sass,js,jsx,html}'],
  theme: {
    extend: {
      textColor: {
        primary: '#ecf0f1',
        error: '#e74c3c',
        link: '#3498db',
        disabled: '#7f8c8d',
      },
      fill: {
        primary: '#ecf0f1',
        error: '#e74c3c',
        link: '#3498db',
        disabled: '#7f8c8d',
      },
      backgroundColor: {
        primary: '#2c3e50',
        secondary: '#3c6382'
      },
      fontFamily: {
        'plus-jakarta-sans': 'Plus Jakarta Sans, sans-serif'
      }
    },
  },
  plugins: [],
} satisfies Config;
