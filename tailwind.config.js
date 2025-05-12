const { fontFamily } = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    `./app/**/*.{js,ts,jsx,tsx,md,mdx}`,
    `./components/**/*.{js,ts,jsx,tsx,md,mdx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        grain: `url('/images/grain.png'), linear-gradient(to bottom, rgba(24,169, 153, 0.3), rgba(24,169, 153, 0.3))`,
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
    transitionDuration: {
      DEFAULT: `300ms`,
    },
    supports: {
      ios: `-webkit-touch-callout: none`,
    },
  },
  plugins: [require(`tailwindcss-animate`), require(`@tailwindcss/typography`)],
};

export default tailwindConfig;
