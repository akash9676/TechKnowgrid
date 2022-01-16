module.exports = {
	purge: ["./public/**/*.html", require("@themesberg/flowbite/plugin")],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
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
