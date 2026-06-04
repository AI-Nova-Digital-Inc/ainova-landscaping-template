import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef8ef",
          100: "#d9efdc",
          600: "#28733d",
          700: "#1e5d32",
          800: "#183f27",
          900: "#10281b"
        },
        moss: "#9fb06a",
        cream: "#f5f1e8",
        soil: "#302a22"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(16, 40, 27, 0.16)",
        soft: "0 16px 42px rgba(16, 40, 27, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
