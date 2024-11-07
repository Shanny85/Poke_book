/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        normal: "#929DA3",
        poison: "#AA6BCB",
        bug: "#91C12F",
        fire: "#FF9D55",
        electric: "#F4D23C",
        dragon: "#0B6DC3",
        fighting: "#CE416B",
        ground: "#D97845",
        ghost: "#5269AD",
        water: "#5090D6",
        psychic: "#FA7179",
        dark: "#5A5465",
        flying: "#8FA9DE",
        rock: "#C5B78C",
        steel: "#5A8EA2",
        grass: "#63BC5A",
        ice: "#73CEC0",
        fairy: "#EC8FE6",

      },
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sancreek: ["Sancreek", "sans-serif"],
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 0.5fr))',
      },
    },
  },
  plugins: [],
}

