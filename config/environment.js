"use strict";

module.exports = function(environment) {
	let ENV = {
		modulePrefix: "seangoresht-ember-website",
		environment,
		rootURL: "/",
		locationType: "auto",
		imagesPath: "assets/images",
		locale: "en-ca",
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance when it is created
		}
	};

	if (environment === "development") {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === "test") {
		ENV.locationType = "none"; // Testem prefers this...

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = "#ember-testing";
		ENV.APP.autoboot = false;
	}

	if (environment === "production") {
		// here you can enable a production-specific feature
	}

	return ENV;
};
