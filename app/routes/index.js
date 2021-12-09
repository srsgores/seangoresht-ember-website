import Route from "@ember/routing/route";
import {inject as service} from "@ember/service";

export default class IndexRoute extends Route {
	@service supabase;
	async model() {
		let {data} = await this.supabase.db.from("posts").select();
		return data;
	}
}
