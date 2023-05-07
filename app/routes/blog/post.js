import Route from "@ember/routing/route";
import {inject as service} from "@ember/service";
export default class BlogPostRoute extends Route {
	@service store;
	async model({id: post_slug}) {
		const post = await this.store.findRecord("posts", post_slug);
		console.log(post);
		return post;
	}
}
