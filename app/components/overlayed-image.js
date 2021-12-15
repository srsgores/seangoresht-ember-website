import Component from "@glimmer/component";
import {htmlSafe} from "@ember/template";

export default class OverlayedImageComponent extends Component {
	get alt() {
		return this.args.alt || "";
	}
	get offsetStyle() {
		return this.args.offset ? htmlSafe(`--top-offset: ${this.args.offset};`) : null;
	}
}
