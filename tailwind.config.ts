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
        primary: "#a89968",
        dark: "#1a1a1a",
        darker: "#0a0a0a",
        accent: "#2a2a2a",
        light: "#f9f8f6",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #a89968 0%, #8b8b8b 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
