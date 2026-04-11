import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode palette (from Stitch design)
        "surface-dim": "#0e0e0e",
        "primary-container": "#ff7948",
        "on-secondary-fixed-variant": "#912d2a",
        "inverse-primary": "#ac3600",
        "outline-variant": "#484847",
        "on-secondary-fixed": "#6a0f11",
        "on-primary": "#591800",
        "on-surface-variant": "#adaaaa",
        "surface-variant": "#262626",
        "on-primary-container": "#451000",
        primary: "#ff9069",
        "surface-container-high": "#201f1f",
        "primary-fixed": "#ff7948",
        "on-primary-fixed-variant": "#551600",
        "surface-container": "#1a1919",
        background: "#0e0e0e",
        outline: "#767575",
        "surface-bright": "#2c2c2c",
        surface: "#0e0e0e",
        "surface-container-low": "#131313",
        "primary-fixed-dim": "#fe5e1e",
        "primary-dim": "#ff7441",
        "on-background": "#ffffff",
        "surface-container-highest": "#262626",
        "surface-container-lowest": "#000000",
        "on-surface": "#ffffff",
        "on-primary-fixed": "#000000",
        // Light mode palette
        "light-background": "#fafaf9",
        "light-surface": "#ffffff",
        "light-surface-variant": "#f1f5f9",
        "light-primary": "#E2725B",
        "light-primary-hover": "#D15F49",
        "light-on-surface": "#0f172a",
        "light-on-surface-variant": "#475569",
        "light-outline": "#cbd5e1",
        // Brand
        brand: "#ff5f1f",
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
        retro: ["'Press Start 2P'", "cursive"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
