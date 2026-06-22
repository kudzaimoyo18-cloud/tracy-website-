/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050507',
          900: '#0a0a10',
          800: '#10101a',
          700: '#171723',
          600: '#20202e',
        },
        ember: {
          50: '#fff4ea',
          100: '#ffe3cc',
          200: '#ffc299',
          300: '#ffa166',
          400: '#ff8533',
          500: '#ff6a00',
          600: '#ed5a00',
          700: '#c24500',
          800: '#933400',
          900: '#5e2200',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
        glow: '0 0 0 1px rgba(255,106,0,0.35), 0 10px 40px -8px rgba(255,106,0,0.55)',
      },
      backgroundImage: {
        'ember-grad': 'linear-gradient(135deg, #ff8a00 0%, #ff4d00 100%)',
        'mesh': 'radial-gradient(60% 60% at 20% 10%, rgba(255,106,0,0.18), transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(255,138,0,0.12), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(120,60,255,0.10), transparent 60%)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        'glow-pulse': { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        drift: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        drift: 'drift 18s ease infinite',
      },
    },
  },
  plugins: [],
}
