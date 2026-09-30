import type { Config } from "tailwindcss";

// Ocean Breeze palette — values live as CSS variables in app/globals.css
// so light and dark mode can swap them without touching components.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        // Raw brand colours (same in both modes)
        ocean: {
          primary: "#0B3D91",
          secondary: "#3BA7F2",
          tertiary: "#7FE7D6",
          mist: "#E8F6FF",
          deep: "#06142E",
        },
        // Semantic tokens (switch with the theme)
        bg: token("bg"),
        "bg-2": token("bg-2"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        brand: token("brand"),
        "brand-ink": token("brand-ink"),
        accent: token("accent"),
        highlight: token("highlight"),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        logo: ['"Jost Variable"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans Variable"', "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        kenburns: { from: { transform: "scale(1.02)" }, to: { transform: "scale(1.12)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee 45s linear infinite reverse",
        kenburns: "kenburns 7s ease-out forwards",
      },
      boxShadow: {
        card: "0 1px 2px rgb(11 61 145 / 0.06), 0 12px 32px -12px rgb(11 61 145 / 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
