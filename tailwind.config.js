/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      xl2: "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      boxShadow: {
        "custom-inset": "inset 0 0 80px",
      },
      animation: {
        "move-left-animation": "move-left 1s linear infinite",
        "move-right-animation": "move-right 1s linear infinite",
        "rotate-border-animation": "rotate 10s linear infinite",
      },

      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },

        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(-360deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
