import Component from "@glimmer/component";
import config from "ember-get-config";

export default class BlogPostComponent extends Component {
	rootURL = config.blogPostBaseURL;
	get postURL() {
		return `${this.rootURL}/${this.args.post.slug}`;
	}
}
