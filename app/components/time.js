import Component from "@glimmer/component";
import config from "ember-get-config";

export default class TimeComponent extends Component {
	get formattedTime() {
		return this.args.datetime.toISOString();
	}
	get localizedTime() {
		return this.args.datetime?.toLocaleString(config.locale, {month: "long", day: "numeric", year: "numeric"});
	}
}
