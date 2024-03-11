/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        128: "32rem",
        164: "46rem",
        196: "58rem",
      },
      width: {
        128: "32rem",
      },
      scale: {
        110: "1.1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    colors: {
      theme: { fill: "#f0838f", hover: "#ff9fac" },
      dark: {
        950: "#0f0f0f",
        900: "#1e1e1e",
        850: "#242424",
        800: "#313131",
        700: "#444444",
        600: "#575757",
        500: "#6a6a6a",
        400: "#7d7d7d",
        300: "#909090",
        200: "#e8e8e8",
        150: "#f0f0f0",
        100: "#f1f5f9",
        50: "#f8fafc",
      },
    },
  },
  plugins: [],
};
