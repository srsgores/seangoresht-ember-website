import EmberRouter from "@ember/routing/router";
import config from "seangoresht-ember-website/config/environment";

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route("photography", function () {
		this.route("photo", {path: ":photo_path"});
	});
	this.route("projects");
	this.route("resume");
});
