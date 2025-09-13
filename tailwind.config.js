/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'dark': '#0a0a0a',
          'gray': '#1a1a1a', 
          'light': '#2a2a2a',
          'green': '#39ff14',
          'purple': '#b026ff',
          'cyan': '#00ffff',
          'pink': '#ff1493',
          'orange': '#ff6600'
        }
      },
      fontFamily: {
        'cyber': ['Inter', 'system-ui', 'sans-serif'],
        'brutal': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #39ff14, 0 0 10px #39ff14'
          },
          '100%': { 
            boxShadow: '0 0 10px #39ff14, 0 0 20px #39ff14'
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #b026ff, 0 0 10px #b026ff'
          },
          '50%': { 
            boxShadow: '0 0 20px #b026ff, 0 0 30px #b026ff'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(57, 255, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.05) 1px, transparent 1px)",
        'gradient-cyber': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
      }
    },
  },
  plugins: [],
}