import Service from '@ember/service';
const PREVIEW_DIRECTORY = "projects";
import {dasherize} from "@ember/string";
export default class DataService extends Service {
	name = "Sean Goresht";
	tagline = "Senior Front-End Developer";
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
				date: new Date("2022-05-01"),
				link: "https://www.deque.com/axe-con/archives/"
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
				date: new Date("2023-02-03"),
				link: "https://www.yychacks.ca"
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
	get projects() {
		return {
			openSource: [
				{
					name: "Story Planner",
					technologies: ["Javascript", "Ember.js", "HTML", "Handlebars.js", "CSS", "OpenAI", "AI"],
					description: "Live editing tool for story planning and mind mapping.  Drag n' drop editor to sequence complex timelines infinitely.",
					features: [
						"Visual editor (WYSIWYG)",
						"Offline-first; no need for the internet.  Data is your own 🔒",
						"Themeable colour scheme.  Embrace your writing mood through your own custom colour scheme 😎",
						"\"No-Distraction\" mode.  Remove all distractions and focus purely on writing.",
						"Internationalized to support multiple languages via i18n",
						"Transferable to other computers.  Export and import your stories to other machines and remain offline.",
						"Infinitely nestable timelines.  No limit to the amount of timelines and stories you can add.  You can even add timelines to the events themselves!"
					],
					githubLink: "https://github.com/srsgores/storyplanner",
					link: "https://mystifying-archimedes-165fe5.netlify.app"
				},
				{
					name: "Ember Former",
					technologies: ["Javascript", "Ember.js", "HTML", "CSS", "Handlebars.js", "Qunit", "Testem"],
					description: "Form generation tool for EmberJS that allows dynamically building forms via inferring form fields from Ember Data.",
					features: [
						"Dynamic form fields depending on @model values",
						"Date, range, and colour inputs supported",
						"Semantic HTML using <fieldset>s and <legend>s",
						"Test coverage through QUnit and Test'em"
					],
					githubLink: "https://github.com/srsgores/ember-former"
				},
				{
					name: "This website",
					technologies: ["Javascript", "Ember.jS", "HTML", "CSS", "Handlebars.js", "Qunit", "Testem", "Prember", "Netlify"],
					description: "Statically-rendered EmberJS website which builds out content via prember and deploys automatically to Netlify",
					features: [
						"Responsive images for various viewport sizes, automatically generated using <picture> element",
						"Single-Page Application using EmberJS",
						"Accessible, semantic landmarks integrated throughout each page",
						"Independent CSS files, allowing each CSS file to be cached separately"
					],
					githubLink: "https://github.com/srsgores/seangoresht-ember-website"
				}
			].map(function (project) {
				return {...project, previewImage: `${PREVIEW_DIRECTORY}/${dasherize(project.name)}.png`};
			})
		}
	}
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
}
