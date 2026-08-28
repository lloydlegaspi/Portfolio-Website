import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: { mont: ["var(--font-mont)", ...fontFamily.sans] },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#1b1b1b",
        primaryDark: "#49beb7",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
} satisfies Config;
