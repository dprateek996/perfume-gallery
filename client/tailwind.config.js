export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1715',
        charcoal: '#3d3a36',
        stone: '#7a746b',
        sand: '#b8b0a3',
        cream: '#f7f5f2',
        gold: '#c9a66b',
        'gold-dark': '#a8854d',
        'gold-light': '#d4b87d',
        border: '#e8e4de',
        surface: '#faf9f7',
        'surface-elevated': '#ffffff',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.55' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.55' }],
        'xl': ['1.25rem', { lineHeight: '1.35' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.15' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.015em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.15em',
        'caps': '0.2em',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(26, 23, 21, 0.07), 0 10px 20px -2px rgba(26, 23, 21, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(26, 23, 21, 0.1), 0 20px 25px -5px rgba(26, 23, 21, 0.05)',
        'soft-xl': '0 25px 50px -12px rgba(26, 23, 21, 0.15)',
        'glow-gold': '0 0 30px -5px rgba(201, 166, 107, 0.4)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(26, 23, 21, 0.05)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
