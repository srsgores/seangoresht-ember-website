import Controller from "@ember/controller";
const PREVIEW_DIRECTORY = "projects";
import {dasherize} from "@ember/string";

export default class ProjectsController extends Controller {
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
					githubLink: "https://github.com/srsgores/storyplanner"
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
					]
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
					]
				}
			].map(function (project) {
				return {...project, previewImage: `${PREVIEW_DIRECTORY}/${dasherize(project.name)}.png`};
			})
		}
	}
}
