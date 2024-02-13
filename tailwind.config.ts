import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  darkMode: ['class'],
  content: ['index.html', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      xs: '0em', // 0px
      sm: '24em', // ~384px
      base: '30em', // ~480px
      md: '48em', // ~768px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      base: '1.25rem',
      md: '1.5rem',
      lg: '1.875rem',
      xl: '2.25rem',
      '2xl': '3rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        border: '#333222',
        background: '#FFF',
        primary: {
          100: '#0B131B',
          200: '#222222',
          300: '#444444',
        },
        secondary: {
          100: '#FFF',
          200: '#222222',
          300: '#444444',
        },
        popover: {
          DEFAULT: '#FFF',
          foreground: '#020817',
        },
      },
      backgroundColor: {
        tooltip: {
          easy: '#32a852',
          medium: '#deaf21',
          hard: '#de2421',
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default tailwindConfig;
