import Component from "@glimmer/component";

export default class NavigationComponent extends Component {
	NAVIGATION_ITEMS = [
		{
			label: "Sean Goresht",
			route: "index"
		},
		{
			label: "Photography",
			route: "photography"
		},
		{
			label: "Blog",
			"route": "blog"
		}
	]
}
