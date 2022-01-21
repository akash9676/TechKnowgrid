module.exports = {
	content: ["./src/**/*.{html,js}"],
	purge: ["./public/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			color: {
				main : "F5272A", // work-sans-700 30
				secondary: "2491F3", // 30
				com : "525761" //montserat-600 ,italic  14
			},
			width: {
				mc: "max-content",
			},
			spacing: {
				88: "21rem",
			},
			borderRadius: {
				"40xl": "20rem",
			},
			scale: {
				200: "2",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
