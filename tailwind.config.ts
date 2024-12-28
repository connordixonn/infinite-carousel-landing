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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0EA5E9", // Ocean Blue - Use sparingly for attention
          light: "#D3E4FD",   // Soft Blue - For backgrounds and subtle elements
          dark: "#0369A1",    // Deep Blue - For hover states and emphasis
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#8E9196", // Neutral Gray - For balance and sophistication
          light: "#F1F5F9",   // Light Gray - For backgrounds
          dark: "#403E43",    // Charcoal Gray - For text and dark sections
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#1EAEDB", // Bright Blue - For interactive elements
          light: "#7DD3FC",   // Sky Blue - For highlights
          dark: "#0C4A6E",    // Navy Blue - For depth
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        'gradient-enterprise': 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;