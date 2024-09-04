import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary_lightest": "#fafafa",
        "primary_lighter": "#e4e5f1",
        "primary_light": "#d2d3db",
        "primary_mid": "#9394a5",
        "primary_dark": "#484b6a"
      },
      screens: {
        // Add custom responsive breakpoints example: 'xl': '1280px'
      }
    },
  },
  plugins: [],
};
export default config;
