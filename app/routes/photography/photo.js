import Route from "@ember/routing/route";

export default class PhotographyPhotoRoute extends Route {
	model(params) {
		const {photo_path} = params;
		// eslint-disable-next-line ember/no-controller-access-in-routes
		const photographyController = this.controllerFor("photography");
		return photographyController.photos.findBy("path", photo_path);
	}
	serialize(model) {
		return {photo_path: model.path};
	}
}
