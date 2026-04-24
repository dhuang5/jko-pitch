import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        jko: {
          yellow: "#F7C800",
          red: "#E23A2F",
          blue: "#1F49B8",
          ink: "#0B0B0D",
          cream: "#F4EDDE",
        },
      },
    },
  },
  plugins: [],
};

export default config;
