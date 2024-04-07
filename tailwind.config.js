/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				main: 'url("/bg-main.webp")'
			},
			animation: {
				fade: "fadeIn 0.5s ease-in-out",
				scaleIn: "scaleIn 0.35s ease-in-out"
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" }
				},
				scaleIn: {
					"0%": {
						opacity: "0",
						transform: "scale(0)"
					},
					"50%": {
						opacity: "0.3"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
}
