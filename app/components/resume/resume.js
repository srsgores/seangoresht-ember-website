import Component from "@glimmer/component";

export default class ResumeResumeComponent extends Component {
	skills = [
		{name: "Javascript", dateStarted: new Date("2009-07-01")},
		{name: "TypeScript", dateStarted: new Date("2017-02-01")},
		{name: "AngularJS", dateStarted: new Date("2015-12-15")},
		{name: "EmberJS", dateStarted: new Date("2012-05-03")}
	];
	get skillsWithExperience() {
		const today = new Date();
		const currentYear = today.getFullYear();
		return this.skills.map(function (skill) {
			return {...skill, experienceYears: currentYear - skill.dateStarted.getFullYear()}
		});
	}
	name = "Sean Goresht";
	tagline = "Senior Front-End Developer";
	get maxExperienceYears() {
		return this.skills.reduce(function (max, skill) {
			return Math.max(max, skill.experienceYears);
		}, 0);
	}
}
