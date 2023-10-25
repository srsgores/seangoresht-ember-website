import Component from "@glimmer/component";

export default class SocialLinksComponent extends Component {
	get isProfessional() {
		return this.args.type === "professional";
	}
}
