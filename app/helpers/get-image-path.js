import {helper} from "@ember/component/helper";
import config from "ember-get-config";
export default helper(function getImagePath(positional) {
	const [imagePath] = positional;
	return `${config.imagesPath}/${imagePath}`;
});
