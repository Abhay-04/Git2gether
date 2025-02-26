import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "valentine",
      "dark",
      "light",
      "cupcake",
      "retro",
      "dracula",
      "lemonade",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "cyberpunk",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset"
    ],
  },
  plugins: [daisyui],
};
