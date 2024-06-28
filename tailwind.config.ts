import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '700px'
    },
    extend: {
      keyframes: {
        'slide-up': {
          '0%': { width: '0px', height: '0px' },
          '100%': { width: '240px', height: '240px', opacity: '1' }
        },
        'slide-next': {
          '0%': { width: '240px', height: '240px', opacity: '1' },
          '100%': { width: '300px', height: '120px', opacity: '1' }
        },
        'slide-down': {
          '0%': { width: '240px', height: '240px', opacity: '1' },
          '100%': { width: '0px', height: '0px', opacity: '0' }
        }
      },
      animation: {
        'slide-up': 'slide-up 300ms ease-out forwards',
        'slide-down': 'slide-down 300ms ease-out forwards',
        'slide-next': 'slide-next 300ms ease-out forwards',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        'navigation-icon': '#B8B8B8',
        'navigation-icon-hover': 'rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
};
export default config;
