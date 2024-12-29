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
          DEFAULT: "#7EC8E3", // Sky Blue
          dark: "#2F3E52", // Light Navy
          foreground: "#FAFAF9", // Off-White
        },
        secondary: {
          DEFAULT: "#505F73", // Slate Blue
          foreground: "#FAFAF9", // Off-White
        },
        accent: {
          DEFAULT: "#E8B860", // Butterscotch
          foreground: "#3C3C3C", // Charcoal Gray
        },
        muted: {
          DEFAULT: "#EBEBEB", // Soft Gray
          foreground: "#3C3C3C", // Charcoal Gray
        },
        neutral: {
          DEFAULT: "#E5D7C7", // Soft Tan
          foreground: "#2F3E52", // Light Navy
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #7EC8E3, #505F73)',
        'gradient-secondary': 'linear-gradient(to bottom, #FAFAF9, #EBEBEB)',
        'gradient-accent': 'linear-gradient(to right, #E8B860, #E5D7C7)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;