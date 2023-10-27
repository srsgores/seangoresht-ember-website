import Component from "@glimmer/component";
import {inject as service} from "@ember/service";

export default class ResumeResumeComponent extends Component {
	@service data;
	skills = [
		{name: "Javascript", dateStarted: new Date("2009-07-01")},
		{name: "TypeScript", dateStarted: new Date("2017-02-01")},
		{name: "AngularJS", dateStarted: new Date("2015-12-15")},
		{name: "EmberJS", dateStarted: new Date("2012-05-03")}
	];
	engagements = [
		{
			role: "Speaker",
			description: "Selected speaker for web accessibility conference.  Speaking to 1,000+ attendees on modern accessibility best practices for building enterprise javascript applications.",
			media: {
				link: "https://www.youtube.com/watch?v=eertVQMltYw&list=PLdhQLgcmuKTsHY97JYtMGbjca-M_tT8Pl&index=37",
				title: "Watch the presentation on YouTube"
			},
			activity: {
				name: "AxxE Con",
				startDate: new Date("2022-05-01"),
				host: {
					name: "Deque",
					link: "https://www.deque.com/axe-con/"
				}
			}
		},
		{
			role: "Podcast Host",
			description: "Podcast host for web development podcast with over 3,500 active monthly listeners, dedicated to helping web developers learn the \"soft skills of software\"",
			media: {
				link: "https://anchor.fm/sean-g7/",
				title: "Listen to the Web Perspectives podcast on Anchor.fm"
			},
			activity: {
				name: "Web Perspectives Podcast",
				startDate: new Date("2021-03-01"),
				endDate: new Date()
			}
		},
		{
			role: "Tech Mentor/Coach",
			description: "Selected coach and peer mentor for the Calgary YYC Hacks hackathon",
			activity: {
				name: "YYC Hacks",
				startDate: new Date("2023-02-03"),
				endDate: new Date("2023-02-05")
			},
			media: {
				link: "https://www.yychacks.ca/#speakers",
				title: "See the YYC Hacks speakers"
			}
		}
	];
	citizenship = [
		{
			country: "Canada",
			icon: "🇨🇦"
		},
		{
			country: "United States",
			icon: "🇺🇸"
		}
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
