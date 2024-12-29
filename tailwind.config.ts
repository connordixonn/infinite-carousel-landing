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
          secondary: '#90AEC5',  // Azure Mist - Secondary color
          navy: '#212E4A',       // Medium Navy - Rich backgrounds
          slate: '#5B6D8C',      // Twilight Blue - Subdued elements
          muted: '#4C5C75',      // Frosted Indigo - Muted text
          warm: '#CDC6BE',       // Warm Stone - Subtle warm accent
          sand: '#BBAF9F',       // Soft Taupe - Secondary warm accent
          white: '#F7F4EF',      // Eggshell White - Primary background
          pearl: '#FDFBF6',      // Cream White - Secondary background
          text: '#1F1F1F',       // Dark Text - Primary text
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7EC8E3",
          foreground: "#F7F4EF",
        },
        secondary: {
          DEFAULT: "#90AEC5",
          foreground: "#F7F4EF",
        },
        muted: {
          DEFAULT: "#ECEAF4",
          foreground: "#4C5C75",
        },
        accent: {
          DEFAULT: "#CDC6BE",
          foreground: "#212E4A",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to right, #F7F4EF, #FDFBF6)',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(126,200,227,0.15)',
        'hover': '0 20px 40px -4px rgba(126,200,227,0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;