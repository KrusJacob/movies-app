import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        show: "show .5s ease-out",
        opacity: "opacity .25s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
