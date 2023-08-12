const { fontFamily } = require(`tailwindcss/defaultTheme`);

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
        grain: `url('/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.5), transparent)`,
      },
      boxShadow: {
        inner: `inset 0 0 12px 0 rgba(15, 30, 41, 0.50)`,
      },
      colors: {
        white: `#F2F7FA`,
        black: `#0F1E29`,
        yellow: `#FCBA04`,
        blue: `#1E3F56`,
        cyan: `#18A999`,
      },
      fontFamily: {
        sans: [`var(--font-inter)`, ...fontFamily.sans],
      },
      fontSize: {
        "8xl": [`min(6rem, 12vw)`, { lineHeight: 1 }],
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
    dropShadow: {
      DEFAULT: `6px 6px 6px rgba(15, 30, 41, 0.25)`,
    },
    supports: {
      ios: `-webkit-touch-callout: none`,
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
