import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        card: {
          DEFAULT: "#121212",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#3b82f6", // Executive blue
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#a1a1aa",
          foreground: "#71717a",
        },
        accent: {
          DEFAULT: "#2dd4bf", // Teal for data-inspired highlights
          foreground: "#000000",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
