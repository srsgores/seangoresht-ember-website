import Component from "@glimmer/component";
export default class ResumeWorkHistoryComponent extends Component {
	roles = [
		{
			company: {
				name: "Synopsys",
				link: "https://synopsys.com",
				imageURL: "/assets/images/work-history/synopsys.png",
				isTextLogo: true
			},
			capacity: "Full-Time",
			startDate: new Date(2020, 1, 1),
			endDate: new Date(2023, 0, 1),
			title: "Senior UI Engineer",
			location: {
				country: "Canada",
				city: "Calgary",
				region: "Alberta"
			},
			description: "Large-scale enterprise JavaScript EmberJS development for code coverage and static code analysis tool. Leverage EmberJS microservice architecture using Ember Engines, ember cli (QUnit, Babel, ES2020, Handlebars). Coordinate and plan team UI engineering infrastructure efforts. Maintain and manage code quality through daily code reviews. Customize, test, and implement custom ember data adapters and serializers based on JSON:API and REST. Implement data visualization through HighCharts customized charts and graphs.",
			technologies: ["EmberJS", "MirageJS", "QUnit", "Test'em", "Highcharts", "jQuery", "Zurb Foundation"]
		},
		{
			company: {
				name: "Lighthouse Labs",
				link: "https://lighthouselabs.ca",
				imageURL: "/assets/images/work-history/lighthouse-labs.png",
				isTextLogo: true
			},
			capacity: "On-Call",
			startDate: new Date(2019, 5, 1),
			endDate: new Date(2020, 4, 1),
			title: "Mentor/Seasonal Instructor",
			location: {
				country: "Canada",
				city: "Calgary",
				region: "Alberta"
			},
			description: "Teach, implement, and develop curriculum for Canadian intensive web development bootcamp.  Instruct and help over 200 students learn HTML, Javascript, ReactJS, CSS, and Ruby (on rails).  Assist in course development, developing over 17 different course modules.  Provide code reviews for students on VCS (GitHub).",
			technologies: ["ReactJS", "Ruby on Rails", "Sinatra", "StorybookJS", "Cyprus"]
		},
		{
			company: {
				name: "Hitachi ID Systems",
				link: "https://www.bravurasecurity.com/",
				imageURL: "/assets/images/work-history/hitachi-id.png",
				isTextLogo: true,
				logoIsInverted: true
			},
			startDate: new Date(2017, 3, 1),
			endDate: new Date(2018, 1, 1),
			capacity: "Full-Time",
			title: "Angular UI Developer",
			location: {
				country: "Canada",
				city: "Calgary",
				region: "Alberta"
			},
			description: "Maintain, develop, and collaborate on ACL management system. Implement web user interfaces using ES2015 and ES2017, Typescript, and other modern front-end technologies.",
			technologies: ["AngularJS", "Typescript", "jQuery", "Protractor", "RxJS", "Zurb Foundation", "Python", "Robot Framework"]
		}
	]
	get sortedRoles() {
		return this.roles.sort(function(role, nextRole) {
			return nextRole.endDate - role.endDate;
		});
	}
}
