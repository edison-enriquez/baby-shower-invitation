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
      },
    },
  },
  plugins: [],
};
