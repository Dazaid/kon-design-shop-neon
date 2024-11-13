/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        neon80s: ['Neon80s', 'sans-serif'],
        candy: ['Candy', 'sans-serif'],
        genuine: ['Genuine', 'sans-serif'],
        goldie: ['Goldie', 'sans-serif'],
        barbeque: ['Barbeque', 'sans-serif'],
        retromic: ['Retromic', 'sans-serif'],
        neoncity: ['Neoncity', 'sans-serif'],
        neontubes: ['Neon Tubes', 'sans-serif'],
        neonlights: ['Neon Lights', 'sans-serif'],
        streamster: ['Streamster', 'sans-serif'],
        exo2: ['Exo 2', 'sans-serif'],
        astronboy: ['Astron Boy', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        hwygoth: ['HWYGOTH', 'sans-serif'],
        monotone: ['Monotone', 'sans-serif'],
        lazer84: ['Lazer84', 'sans-serif'],
        elektora: ['ELEKTORA', 'sans-serif'],
        tiltneon: ['Tilt Neon', 'sans-serif'],
        hastron: ['Hastron', 'sans-serif'],
        vintage: ['Vintage', 'sans-serif'],
      },
      dropShadow: {
        neon: '0px 0px 30em rgba(249, 191, 53, 1)',
        neonw: '0px 2px 40px rgb(255, 255, 255)',
        neonlv: '0px 2px 50px rgba(219, 162, 215, 1)',
        neonv: '0px 2px 20px rgba(86, 27, 82, 1)',
      },
      pseudoElements: {},
      // Define the custom keyframes
      keyframes: {
        glowing: {
          '0%': { boxShadow: '0 0px 50px 0px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0px 70px 0px rgba(255, 255, 255, 0.4)' },
          '100%': { boxShadow: '0 0px 50px 0px rgba(255, 255, 255, 0.2)' },
        },
        blinky: {
          '0%': { fill: 'rgba(255, 255, 255, 1)' },
          '90%': { fill: 'rgba(255, 255, 255, 1)' },
          '93%': { fill: 'rgba(255, 255, 255, 0.3)' },
          '95%': { fill: 'rgba(255, 255, 255, 1)' },
          '100%': { fill: 'rgba(255, 255, 255, 0.3)' },
        },
        blinky2: {
          '0%': { fill: 'rgba(255, 255, 255, 1)' },
          '92%': { fill: 'rgba(255, 255, 255, 1)' },
          '94%': { fill: 'rgba(255, 255, 255, 0.3)' },
          '96%': { fill: 'rgba(255, 255, 255, 1)' },
          '98%': { fill: 'rgba(255, 255, 255, 0.3)' },
          '100%': { fill: 'rgba(255, 255, 255, 1)' },
        },
        blinky3: {
          '0%': { opacity: 1 },
          '96%': { opacity: 1 },
          '97%': { opacity: 0.5 },
          '98%': { opacity: 1 },
          '99%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        blinky4: {
          '0%': { opacity: 1 },
          '96%': { opacity: 1 },
          '97%': { opacity: 0.5 },
          '98%': { opacity: 1 },
          '99%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        blinky5: {
          '0%': { opacity: 1 },
          '96%': { opacity: 1 },
          '97%': { opacity: 0.5 },
          '98%': { opacity: 1 },
          '99%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        drawBorderSlow: {
          '0%': {
            clipPath: 'polygon(50% 0, 50% 0, 50% 0, 50% 0)', // Only one point at the center
            borderColor: 'rgb(255, 255, 255)',
            borderRadius: '1rem',
            filter: 'drop-shadow(0px 0px -7px rgb(255, 255, 255))',
            border: '2px double',
          },
          '30%': {
            clipPath: 'polygon(2% 0, 98% 0%, 100% 10%, 0% 10%)', // Side lines visible
          },
          '60%': {
            clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)', // Side lines visible
            border: '7px double',
          },
          '100%': {
            clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)', // Full border visible except bottom
            borderColor: 'rgb(255, 255, 255)',
            borderRadius: '1rem',
            filter: 'drop-shadow(0px 0px 15px rgb(255, 255, 255))',
            transition: 'all 0.5s ease-in-out',
            border: '7px double',
          },
        },
        drawBorderLight: {
          '0%': {
            filter: 'drop-shadow(0px 0px 7px rgba(255, 255, 255, 1))',
            boxShadow: '0 0px 12px 1px rgba(255, 255, 255, 0.7)',
          },
          '30%': {
            boxShadow: '0 0px 12px 1px rgba(255, 255, 255, 0.7)',
          },
          '60%': {
            boxShadow: '0 0px 12px 1px rgba(255, 255, 255, 0.7)',
          },
          '100%': {
            filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 1))',
            boxShadow: '0 0px 30px 10px rgba(255, 255, 255, 0.7)',
            transition: 'all 0.5s ease-in-out',
          },
        },
      },
    },
    // Define the animation that uses the keyframes
    animation: {
      blinky5: 'blinky5 7.1s infinite',
      blinky4: 'blinky4 7.05s infinite',
      blinky3: 'blinky3 7s infinite',
      blinky2: 'blinky2 5s infinite',
      blinky: 'blinky 3s infinite',
      drawBorderSlow: 'drawBorderSlow 1s forwards',
      drawBorderLight: 'drawBorderLight 1s forwards',
      glowing: 'glowing 2s infinite',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-border-effect::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '2px double rgba(255, 255, 255, 0.3)',
          borderRadius: '0.75rem', // rounded-xl equivalent
          zIndex: '1',
        },
        '.custom-border-effect::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '2px double rgba(255, 255, 255, 0.3)',
          borderRadius: '0.75rem', // rounded-xl equivalent
          zIndex: '2',
        },
      });
    },
  ],
};
