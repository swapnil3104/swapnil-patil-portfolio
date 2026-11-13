/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'tablet': '810px',
      'lg': '900px',     // Navigation collapse breakpoint on Soren Hale
      'desktop': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        sh: {
          bone: '#0c0e0d',
          'bone-deep': '#080a09',
          ink: '#f2f4f3',
          brass: '#c6ff00',
          'brass-alt': '#d4ff00',
          'brass-glow': 'rgba(198, 255, 0, 0.20)',
          stone: '#8a928f',
          fog: '#4f5854',
          night: '#000000',
          card: 'rgba(18, 22, 20, 0.75)',
          elevated: '#131715',
          hair: 'rgba(242, 244, 243, 0.12)',
          hair2: 'rgba(242, 244, 243, 0.22)',
          'hair-brass': 'rgba(198, 255, 0, 0.35)',
        },
        bg: {
          primary: '#0c0e0d',
          elevated: '#131715',
          card: '#181c1a',
        },
        typography: {
          headline: '#f2f4f3',
          body: '#d4d8d6',
          muted: '#8a928f',
          dim: '#828c87',
        },
        accent: {
          emerald: '#c6ff00',   // Maps legacy emerald classes directly to Soren Hale Electric Lime
          brass: '#c6ff00',
          hover: '#d4ff00',
          warning: '#F59E0B',
          glow: 'rgba(198, 255, 0, 0.20)',
        },
        border: {
          hairline: 'rgba(242, 244, 243, 0.08)',
          hover: 'rgba(242, 244, 243, 0.18)',
          hair: 'rgba(242, 244, 243, 0.12)',
          hair2: 'rgba(242, 244, 243, 0.22)',
          brass: 'rgba(198, 255, 0, 0.35)',
        },
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        'site': '1280px',
      },
      borderRadius: {
        'pill': '9999px',
        'chip': '7px',
        'keycap': '10px',
      },
      boxShadow: {
        'inset-hair': 'inset 0 0 0 1px rgba(242, 244, 243, 0.12)',
        'inset-hair2': 'inset 0 0 0 1px rgba(242, 244, 243, 0.22)',
        'inset-brass': 'inset 0 0 0 1px rgba(198, 255, 0, 0.35)',
        'brass-glow': '0 0 24px rgba(198, 255, 0, 0.30)',
        'keycap': '0 4px 0 #000, 0 5px 10px rgba(0,0,0,0.5)',
        'keycap-active': '0 2px 0 #000, 0 0 16px rgba(198, 255, 0, 0.4)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-status': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideUp': 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
