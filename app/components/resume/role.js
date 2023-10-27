import Component from "@glimmer/component";
import config from "ember-get-config";

export default class ResumeRoleComponent extends Component {
	get startTime() {
		return this.args.role?.startDate.toISOString();
	}
	get endTime() {
		return this.args.role?.endDate.toISOString();
	}
	get fromYear() {
		return this.args.role?.startDate.getFullYear();
	}
	get fromMonth() {
		return this.args.role?.startDate.toLocaleString(config.locale, {month: "long"});
	}
	get toYear() {
		return this.args.role?.endDate.getFullYear();
	}
	get toMonth() {
		return this.args.role?.endDate.toLocaleString(config.locale, {month: "long"});
	}
}
