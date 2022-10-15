/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: `pl`,
	content: [
		`./pages/**/*.{js,ts,jsx,tsx}`,
		`./components/**/*.{js,ts,jsx,tsx}`
	],
	theme: {
		extend: {
			colors: {
				white: `#F2F7FA`,
				black: `#0F1E29`,
				yellow: `#FCBA04`,
				blue: `#1E3F56`,
				cyan: `#18A999`
			}
		},
	},
	plugins: [],
};
