import type { Config } from 'tailwindcss';

export default {
  content: ['**/*.{ts,tsx,css,scss,sass,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#2c3e50',
        'clouds': '#ecf0f1',
        'peter-river': '#3498db'
      }
    },
  },
  plugins: [],
} satisfies Config;
