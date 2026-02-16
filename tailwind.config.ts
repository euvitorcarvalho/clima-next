import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img-mobile": "url('/assets/bg-mobile.png')",
        "img-desktop": "url('/assets/bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
