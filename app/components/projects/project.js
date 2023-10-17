import Component from "@glimmer/component";

export default class ProjectsProjectComponent extends Component {
	get projectLink() {
		return this.args.project?.link ?? this.args.project?.githubLink;
	}
}
