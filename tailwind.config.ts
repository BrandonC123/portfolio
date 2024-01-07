import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "night",
      {
        base: {
          primary: "#78a4f5",
          secondary: "#AF94EE",
          accent: "#2f926d",
          neutral: "#9ca3af",
          "base-100": "#303030",
          "base-200": "#212121",
          "base-300": "#0F0F0F",
          info: "#27262b",
          success: "#5ed98d",
          warning: "#fbbd23",
          error: "#f85a4f",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
