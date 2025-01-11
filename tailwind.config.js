/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, hsl(222, 84%, 60%), hsl(164, 79%, 71%))',
      },
      animation: {
        rotate: 'rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) infinite alternate',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      filter: {
        'custom-blur': 'blur(150px)',
      },
      borderRadius: {
        'custom': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      width: {
        'gradient-size': '750px',
      },
      height: {
        'gradient-size': '750px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

