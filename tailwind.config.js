/** @type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

*/
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'], // Puedes agregar esta fuente para "shower"
        girl: ['Girl', 'cursive'],       // Fuente Girl
        girl1: ['Girl1', 'cursive'],       // Fuente Girl 1
        girl2: ['Girl2', 'cursive'],       // Fuente Girl 1
        bubble: ['JustBubble', 'cursive'],
        bubbleBash: ['Bubble_Bash', 'cursive'],
        Kidsbee: ['Kidsbee', 'cursive'],
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        jump: 'jump 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
