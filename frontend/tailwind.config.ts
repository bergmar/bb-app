/** @type {import('tailwindcss').Config} */

export const bbColors = {
  blue: { dark: '#44648D' },
  sand: { base: '#FFF9ED' }
}
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveWill: {
          '0%, 100%': {
            transform: 'translate(0, 0)',
          },
          '20%, 80%': {
            transform: 'translate(12px, 0)',
          },
          '40%': {
            transform: 'translate(12px, 12px)',
          },
          '60%': {
            transform: 'translate(0, 12px)',
          },
        },
        'animate-in-from-b': {
          '0%': {
            transform: 'translateY(10rem)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'animate-in-from-t': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(10rem)',
          },
        },
        zoom: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
      animation: {
        'move-will': 'moveWill 2s linear infinite',
        'in-from-b': 'animate-in-from-b 1s cubic-bezier(.6,.05,.15,1.02) forwards',
        'in-from-t': 'animate-in-from-t 1.3s cubic-bezier(.6,.05,.15,1.02) forwards',
        'zoom': 'zoom 1.4s .3s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
      fontFamily: {
        'bb-heading': ["'Barlow Condensed'"],
        'bb-body': ["'DM Sans'"],
        'code': ["'Courier New', courier"]
      },
      colors: {
        'bb-blue': {
          'dark': bbColors.blue.dark,
          'medium': '#4983AB',
          'light': '#9DD1EF',
          'lighter': '#BFE8FF',
          'lightest': '#E2F5FF',
        },
        'bb-red': {
          'base': '#BB242E'
        },
        'bb-sand': {
          'base': bbColors.sand.base,
          'dark': '#4A3407'
        }
      }
    },
  },
  plugins: [],
};
