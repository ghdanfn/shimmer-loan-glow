
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
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['iranyekan', 'IRANYekan', 'sans-serif'],
      },
      textDirection: {
        rtl: 'rtl',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'glitch-1': {
          '0%': { clip: 'rect(20px, 9999px, 15px, 0)' },
          '10%': { clip: 'rect(42px, 9999px, 38px, 0)' },
          '20%': { clip: 'rect(61px, 9999px, 4px, 0)' },
          '100%': { clip: 'rect(8px, 9999px, 31px, 0)' },
        },
        'glitch-2': {
          '0%': { clip: 'rect(12px, 9999px, 61px, 0)' },
          '50%': { clip: 'rect(46px, 9999px, 33px, 0)' },
          '100%': { clip: 'rect(63px, 9999px, 46px, 0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch-1': 'glitch-1 0.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 0.5s infinite linear alternate-reverse',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'neon': '0 0 10px rgba(154, 0, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
        'card': '0px 4px 15px rgba(0, 0, 0, 0.3)',
        'hover': '0 10px 25px rgba(0, 0, 0, 0.2), 0 0 5px rgba(0, 255, 255, 0.5)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
