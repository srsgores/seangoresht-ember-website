import Component from "@glimmer/component";

export default class NavigationComponent extends Component {
	NAVIGATION_ITEMS = [
		{
			label: "Sean Goresht",
			route: "index"
		},
		{
			label: "Portfolio",
			route: "projects"
		},
		{
			label: "Resume",
			route: "resume"
		},
		{
			label: "Photography",
			route: "photography"
		}
	]
}
