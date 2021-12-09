import Service from "@ember/service";
import {createClient} from "@supabase/supabase-js";
import config from "ember-get-config";
import fetch from "fetch";
const {DATABASE_URL, PUBLIC_KEY} = config.supabase;

export default class SupabaseService extends Service {
	constructor() {
		super(...arguments);
		this.db = createClient(DATABASE_URL, PUBLIC_KEY, {
			fetch
		});
	}
}
