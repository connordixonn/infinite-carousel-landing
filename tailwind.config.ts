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
        'theme': {
          primary: '#7EC8E3',    // Sky Blue - Primary brand color
          secondary: '#90AEC5',  // Azure Mist - Secondary brand color
          navy: '#212E4A',       // Medium Navy - Dark backgrounds
          slate: '#5B6D8C',      // Twilight Blue - Subdued accents
          warm: '#CDC6BE',       // Warm Stone - Subtle warm accent
          sand: '#BBAF9F',       // Soft Taupe - Additional warm accent
          white: '#F7F4EF',      // Eggshell White - Primary background
          pearl: '#FDFBF6',      // Cream White - Secondary background
          text: '#1F1F1F',       // Dark Text - Primary text color
          muted: '#4C5C75',      // Frosted Indigo - Muted text
          blue: '#009fe3',       // Keeping the existing blue as requested
        },
        'graph': {
          bg: '#F7F4EF',         // Updated to match theme
          grid: '#ECEAF4',       // Subtle Lavender for grid
          hover: '#F7F4EF',      // Eggshell White for hover
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#009fe3",    // Keeping as requested
          foreground: "#F7F4EF", // Updated to match theme
        },
        secondary: {
          DEFAULT: "#90AEC5",    // Azure Mist
          foreground: "#F7F4EF", // Eggshell White
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#ECEAF4",    // Subtle Lavender
          foreground: "#4C5C75", // Frosted Indigo
        },
        accent: {
          DEFAULT: "#CDC6BE",    // Warm Stone
          foreground: "#212E4A", // Medium Navy
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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'graph-pattern': `radial-gradient(#ECEAF4 1px, transparent 1px)`,
      },
      backgroundSize: {
        'graph-pattern': '24px 24px',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 30s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;