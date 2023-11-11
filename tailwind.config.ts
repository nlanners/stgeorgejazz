import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      header: ["Bebas_Neue", "sans-serif"],
      body: ["Rubik", "sans-serif"],
    },
    colors: {
      'accent': 'rgb(251 146 60)',
      'accent-light': ' rgb(147 197 253)'
    }
  },
};
export default config;
