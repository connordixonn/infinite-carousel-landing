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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        primary: {
          DEFAULT: "#0EA5E9",
          light: "#BAE6FD",
          dark: "#075985",
        },
        secondary: {
          DEFAULT: "#6366F1",
          light: "#E0E7FF",
          dark: "#4338CA",
        },
        accent: {
          DEFAULT: "#F43F5E",
          light: "#FFE4E6",
          dark: "#BE123C",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-enterprise': 'linear-gradient(to right, #075985 0%, #0EA5E9 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;