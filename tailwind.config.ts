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
        primary: "#d4af37",
        dark: "#111111",
        darker: "#000000",
        accent: "#f5d77b",
        light: "#f7f3ea",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #d4af37 0%, #f5d77b 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
