import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          primary: '#212E4A',    // Medium Navy - Primary background
          secondary: '#009fe3',  // Required blue - Accent color
          slate: '#5B6D8C',      // Twilight Blue - Secondary text
          muted: '#4C5C75',      // Frosted Indigo - Muted elements
          warm: '#CDC6BE',       // Warm Stone - Warm accents
          sand: '#BBAF9F',       // Soft Taupe - Secondary warm accent
          cream: '#F7F4EF',      // Eggshell - Light text
          navy: '#242424',       // Deep Graphite - Dark sections
          accent: '#7EC8E3',     // Sky Blue - Highlights
          text: '#FDFBF6',       // Cream White - Primary text
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#212E4A",
          foreground: "#F7F4EF",
        },
        secondary: {
          DEFAULT: "#009fe3",
          foreground: "#F7F4EF",
        },
        muted: {
          DEFAULT: "#4C5C75",
          foreground: "#F7F4EF",
        },
        accent: {
          DEFAULT: "#7EC8E3",
          foreground: "#212E4A",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #212E4A 0%, #4C5C75 100%)',
        'gradient-accent': 'linear-gradient(135deg, #009fe3 0%, #7EC8E3 100%)',
        'gradient-warm': 'linear-gradient(135deg, #CDC6BE 0%, #BBAF9F 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 159, 227, 0.5)',
        'glow': '0 0 40px rgba(126, 200, 227, 0.3)',
        'warm': '0 0 30px rgba(205, 198, 190, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;