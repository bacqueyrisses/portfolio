import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

import typographyStyles from './typography'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [typographyPlugin],

  theme: {
    extend: {
      colors: {
        linkedin: '#0B66C2',
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      gradientColorStops: {
        'gradient-1-start': '#007CF0',
        'gradient-1-end': '#2DD4BF',
        'gradient-2-start': '#7928CA',
        'gradient-2-end': '#FF0080',
        'gradient-3-start': '#FF4D4D',
        'gradient-3-end': '#F9CB28',
      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: '1',
          },
          '33.333%, 83.333%': {
            opacity: '0',
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: '0',
          },
          '25%, 91.667%': {
            opacity: '1',
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: '0',
          },
          '33.333%, 50%': {
            opacity: '1',
          },
          '16.667%, 66.667%': {
            opacity: '0',
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: '1',
          },
          '33.333%, 50%': {
            opacity: '0',
          },
          '25%, 58.333%': {
            opacity: '1',
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: '0',
          },
          '66.667%, 83.333%': {
            opacity: '1',
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: '1',
          },
          '66.667%, 83.333%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
      },
      typography: typographyStyles,
    },
  },
} satisfies Config
