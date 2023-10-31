import Component from "@glimmer/component";
import {inject as service} from "@ember/service";

export default class ResumeResumeComponent extends Component {
	@service data;
	get skillsWithExperience() {
		const today = new Date();
		const currentYear = today.getFullYear();
		return this.data.skills.map(function (skill) {
			return {...skill, experienceYears: currentYear - skill.dateStarted.getFullYear()}
		});
	}
	get maxExperienceYears() {
		return this.data.skills.reduce(function (max, skill) {
			return Math.max(max, skill.experienceYears);
		}, 0);
	}
}
