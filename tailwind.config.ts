import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A5F2A',
        secondary: '#8DC63F',
        accent: {
          brown: '#8B4513',
          gold: '#FFD700',
          blue: '#0077BE',
        },
        neutral: {
          white: '#FFFFFF',
          lightGray: '#F5F5F5',
          darkGray: '#333333',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      opacity: ['active'],
    },
  },
  plugins: [],
};

export default config;