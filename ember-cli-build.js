"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function(defaults) {
	let app = new EmberApp(defaults, {
		"responsive-image": {
			images: [
				{
					include: "assets/images/**/*",
					widths: [2048, 1536, 1080, 750, 640]
				}
			]
		},
		prember: {
			urls: [
				"/",
				"/photography",
				"projects",
				"resume"
			]
		}
	});

	return app.toTree();
};
