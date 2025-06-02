/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#13131f',
        'cyber-purple': {
          900: '#1a0b2e',
          800: '#271046',
          700: '#3a1a6a',
          600: '#4c2889',
          500: '#5e35a7',
          400: '#7e5cc0',
          300: '#9f82d9',
          200: '#bfaaea',
          100: '#dfd2f5',
        },
        'cyber-pink': '#ff2a6d',
        'cyber-blue': '#05d9e8',
        'cyber-green': '#39ff14',
        'cyber-yellow': '#fffd82',
      },
      fontFamily: {
        'cyber': ['Rajdhani', 'sans-serif'],
        'terminal': ['Share Tech Mono', 'monospace'],
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        }
      },
      animation: {
        glitch: 'glitch 1s infinite',
        flicker: 'flicker 3s linear infinite',
        scan: 'scan 2s linear infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #1a0b2e 1px, transparent 1px), linear-gradient(to bottom, #1a0b2e 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
};