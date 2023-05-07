"use strict";

const StaticSiteJson = require("broccoli-static-site-json");

const postsJSON = new StaticSiteJson("posts", {
	contentFolder: "posts",
	type: "post",
	contentTypes: ["html"],
	collate: true,
	attributes: ["title", "description", "tags", "date", "image"]
});

module.exports = {
	name: require("./package").name,

	isDevelopingAddon() {
		return true;
	},

	treeForPublic() {
		return postsJSON;
	}
};
