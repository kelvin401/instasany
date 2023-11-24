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
        "green-primary": "#1d3531",
        "green-border": "#2a4b46",
        "green-actived": "#5d8a83",
        "green-btn": "#ccec60",
        "green-title-cards": "#719d96",
      },
      maxWidth: {
        grid: "77.5rem",
        "text-hero": "66rem",
        "area-icons": "53.4375rem",
        "area-mockups": "59.8125rem",
        "area-cards": "82.5rem",
      },
      height: {
        hero: "52.625rem",
        "area-cards": "32.125rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "url('/bg-hero.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
