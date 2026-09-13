import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066bf',
          dark: '#004d99',
        },
        accent: {
          DEFAULT: '#ce1b28',
          dark: '#b3131f',
        },
        technical: {
          dark: '#1a1a1a',
          darker: '#0d0d0d',
          border: '#2a2a2a',
          muted: '#4c4a5f',
        },
      },
      fontFamily: {
        heading: ['var(--font-archivo-narrow)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
