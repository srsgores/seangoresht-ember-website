import EmberRouter from "@ember/routing/router";
import config from "seangoresht-blog/config/environment";

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {
	this.route("projects");
	this.route("about");
	this.route("photography", function() {
		this.route("photo", {path: ":photo_path"});
	});
	this.route("resume");
});
