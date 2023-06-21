/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: `pl-`,
	content: [
		`./app/**/*.{js,ts,jsx,tsx}`,
		`./components/**/*.{js,ts,jsx,tsx}`
	],
	theme: {
		extend: {
			aspectRatio: {
				poster: `5 / 7`
			},
			colors: {
				white: `#F2F7FA`,
				black: `#0F1E29`,
				yellow: `#FCBA04`,
				blue: `#1E3F56`,
				cyan: `#18A999`
			},
			fontSize: {
				"9xl": [`14rem`, {lineHeight: 0, letterSpacing: `-0.025em`, fontWeight: 600}]
			},
			typography: {
				DEFAULT: {
					css: {
						color: `#0F1E29`
					}
				}
			}
		},
		supports: {
			ios: `-webkit-touch-callout: none`
		}
	},
	plugins: [
		require(`@tailwindcss/typography`)
	],
};
