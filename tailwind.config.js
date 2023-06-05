/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
delete colors["blueGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["lightBlue"];
delete colors["warmGray"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      menu: "#113259",
      primary: "#6fba0d",
      second: "#dc582a",
      momo: "#C1177C",
    },
  },
  plugins: [],
};
