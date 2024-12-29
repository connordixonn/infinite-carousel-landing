import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0EA5E9", // Vivid Sky Blue
          dark: "#0369A1", // Deep Ocean Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#334155", // Slate Gray
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F59E0B", // Warm Amber
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F5F9", // Light Gray
          foreground: "#334155",
        },
        neutral: {
          DEFAULT: "#E2E8F0", // Cool Gray
          foreground: "#334155",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #0EA5E9, #334155)',
        'gradient-secondary': 'linear-gradient(to bottom, #F8FAFC, #E2E8F0)',
        'gradient-accent': 'linear-gradient(to right, #F59E0B, #FBBF24)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;