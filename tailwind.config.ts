import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00695C",
          dark: "#004D40",
          soft: "#ECFDF5"
        },
        emeraldPlus: "#059669",
        gold: "#F59E0B",
        ink: "#0F172A"
      },
      boxShadow: {
        soft: "0 14px 45px rgba(15, 23, 42, 0.08)",
        glow: "0 18px 55px rgba(0, 105, 92, 0.22)"
      },
      backgroundImage: {
        pattern:
          "radial-gradient(circle at 1px 1px, rgba(0,105,92,0.13) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
