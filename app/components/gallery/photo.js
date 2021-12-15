import Component from "@glimmer/component";

export default class GalleryPhotoComponent extends Component {
	get imagePath() {
		return `assets/images/${this.args.photo.path}`;
	}
	get altText() {
		return this.args.photo.name || "";
	}
}
