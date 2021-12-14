import Component from "@glimmer/component";

export default class OverlayedImageComponent extends Component {
	get alt() {
		return this.args.alt || "";
	}
}
