import Component from "@glimmer/component";

export default class NavigationComponent extends Component {
	NAVIGATION_ITEMS = [
		{
			label: "Sean Goresht",
			route: "index"
		},
		{
			label: "Projects",
			route: "projects"
		},
		{
			label: "Photography",
			route: "photography"
		},
		{
			label: "Resume",
			route: "resume"
		}
	]
}
