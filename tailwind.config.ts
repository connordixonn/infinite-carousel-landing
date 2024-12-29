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
          navy: '#212E4A',      // Medium Navy - Primary background
          indigo: '#4C5C75',    // Frosted Indigo - Secondary background
          blue: '#009fe3',      // Required blue - Accent color
          sky: '#7EC8E3',       // Sky Blue - Interactive elements
          denim: '#6F8CA9',     // Faded Denim - Tertiary elements
          walnut: '#7B5A47',    // Walnut Brown - Rich accents
          mocha: '#9C8F80',     // Mocha - Subtle accents
          stone: '#CDC6BE',     // Warm Stone - Muted elements
          taupe: '#BBAF9F',     // Soft Taupe - Secondary muted
          cream: '#FDFBF6',     // Cream White - Light text
          pearl: '#FEFEFD',     // Pearl White - Bright elements
          graphite: '#242424',  // Deep Graphite - Dark sections
          text: '#1F1F1F',      // Dark Text - Primary text
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#212E4A",
          foreground: "#FDFBF6",
        },
        secondary: {
          DEFAULT: "#009fe3",
          foreground: "#FDFBF6",
        },
        muted: {
          DEFAULT: "#4C5C75",
          foreground: "#FDFBF6",
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
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
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