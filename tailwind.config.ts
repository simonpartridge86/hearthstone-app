import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      gray: "#C0CBD7",
      green: "#5BA370",
      blue: "#4962B9",
      dark1: "#18191A",
      dark2: "#1C1C20",
      dark3: "#212126",
      dark4: "#2C2C33",
    },
    fontFamily: {
      sans: ["var(--font-roboto)"],
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
export default config;
