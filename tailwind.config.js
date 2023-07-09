const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: `pl-`,
  content: [`./app/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      aspectRatio: {
        poster: `5 / 7`,
      },
      backgroundImage: {
        grain: `url('/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.4), transparent)`,
      },
      colors: {
        white: `#F2F7FA`,
        black: `#0F1E29`,
        yellow: `#FCBA04`,
        blue: `#1E3F56`,
        cyan: `#18A999`,
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        "9xl": [
          `12rem`,
          { lineHeight: 0, letterSpacing: `-0.075em`, fontWeight: 600 },
        ],
      },
      spacing: {
        30: `7.5rem`,
      },
      typography: {
        DEFAULT: {
          css: {
            color: `#0F1E29`,
          },
        },
      },
    },
    supports: {
      ios: `-webkit-touch-callout: none`,
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
