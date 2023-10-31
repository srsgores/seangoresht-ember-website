import Component from "@glimmer/component";
import {inject as service} from "@ember/service";

export default class ResumeWorkHistoryComponent extends Component {
	@service data;
	get sortedRoles() {
		return this.data.roles.sort(function(role, nextRole) {
			return nextRole.endDate - role.endDate;
		});
	}
}
