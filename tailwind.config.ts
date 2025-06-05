import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d",
          light: "#2a4a7f",
          dark: "#102a4c",
        },
        secondary: {
          DEFAULT: "#2d3748",
          light: "#4a5568",
          dark: "#1a202c",
        },
        accent: {
          DEFAULT: "#ed8936",
          light: "#f6ad55",
          dark: "#dd6b20",
        },
        background: {
          DEFAULT: "#f7fafc",
          dark: "#1a202c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
