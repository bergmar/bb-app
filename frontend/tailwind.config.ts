/** @type {import('tailwindcss').Config} */

export const bbColors = {
  blue: { dark: '#44648D' },
  sand: {base: '#FFF9ED'}
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
      },
      animation: {
        'move-will': 'moveWill 2s linear infinite',
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
