import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'], // We will set this in layout.tsx
      },
      colors: {
        zinc: {
          850: '#1f2022',
          950: '#0c0c0e',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;