const { fontFamily } = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./app/**/*.{js,ts,jsx,tsx,md,mdx}`,
    `./components/**/*.{js,ts,jsx,tsx,md,mdx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        grain: `url('/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.3), rgba(24,169, 153, 0.3))`,
      },
      fontFamily: {
        sans: [`var(--font-inter)`, ...fontFamily.sans],
        overpass: [`var(--font-overpass)`, ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: `#0F1E29`,
          },
        },
      },
    },
    colors: {
      white: `#F2F7FA`,
      black: `#0F1E29`,
      yellow: `#FCBA04`,
      blue: `#1E3F56`,
      cyan: `#18A999`,
    },
    fontSize: {
      xs: [`min(0.75rem, 2.75vw)`, { lineHeight: 1 }],
      sm: [`min(0.875rem, 2.75vw)`, { lineHeight: 1 }],
      lg: [`min(1.125rem, 5vw)`, { lineHeight: 1 }],
      xl: [`min(1.25rem, 5vw)`, { lineHeight: 1 }],
      "2xl": [`min(1.5rem, 4vw)`, { lineHeight: 1 }],
      "3xl": [`min(1.875rem, 5vw)`, { lineHeight: 1 }],
      "4xl": [`min(2.25rem, 6vw)`, { lineHeight: 1 }],
      "5xl": [`min(2.75rem, 7vw)`, { lineHeight: 1 }],
      "6xl": [`min(3.75rem, 15vw)`, { lineHeight: 1 }],
      "7xl": [`min(4.5rem, 12vw)`, { lineHeight: 1 }],
    },
    dropShadow: {
      DEFAULT: `6px 6px 6px rgba(15, 30, 41, 0.25)`,
    },
    transitionDuration: {
      DEFAULT: `300ms`,
    },
    supports: {
      ios: `-webkit-touch-callout: none`,
    },
  },
  plugins: [require(`tailwindcss-animate`), require(`@tailwindcss/typography`)],
};
