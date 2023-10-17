import Component from "@glimmer/component";

export default class GalleryPhotoComponent extends Component {
	get altText() {
		return this.args.photo.name || "";
	}
}
