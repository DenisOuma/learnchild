/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./app/templates/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"universal-color": "#fff",
				"navbar-prime-color": "#cccc",
				"primary-color": "#00C2FF",
				"btn-hover-color": "#00c3ffb6",
				"hero-bg-color": "#F6F2FD",
				"text-colorprime": "#16023F",
				"bubble-one-color": "#FF8057",
				"bubble-two-color": "#FFD05B",
			},
		},
	},
	plugins: [],
};
