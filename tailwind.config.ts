import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        'section': 'calc(100vh - 5rem)', 
        'section-taller': 'calc(100vh - 2rem)', 
        "padded-sm": "1rem",
        "padded-md": "2rem",
        "padded": "2.5rem",
        "padded-lg": "3.5rem",
        "padded-xl": "5.5rem",
      },
      screens: {
        'screen-980': { 'raw': '(min-height: 980px)' },
      },
      colors: {
        lightdark: "hsl(var(--lightdark))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), plugin(function({addUtilities}) {
    const newUtils = {
      ".bg-hero-gradient": {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(26, 32, 44, 0.85) 30%, rgba(26, 32, 44, 0.7) 40%, transparent 100%), url('/images/Ejik_group_hero.webp')}",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply"
        // backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(26, 32, 44, 0.85) 30%, rgba(26, 32, 44, 0.7) 40%, transparent 100%)',
      }
    }
    addUtilities(newUtils);
  })],
} satisfies Config

export default config