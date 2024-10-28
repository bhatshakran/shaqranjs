import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				pockota: ["var(--font-pockota)"],
				inter: ["var(--font-inter)"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)",
				"teritiary-color": "var(--teritiary-color)",
				"gradient-end-color": "var(--gradient-end-color)",
				"gradient-start-color": "var(--gradient-start-color)",
				"bg-gradient-color": "var(--bg-gradient-color)",
				"gradient-start-dark-color":"var(--gradient-start-dark-color)"
			},
      backgroundImage: {
        'hero-pattern': "url('/Vector.jpg')",
      }
		},
	},
	plugins: [],
};
export default config;
