import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";
import config from "ember-get-config";
module("Integration | Helper | get-image-path", function (hooks) {
	setupRenderingTest(hooks);

	test("it builds correct image path", async function (assert) {
		this.photoPath = "path/to/photo";
		const expectedImagePath = `${config.imagesPath}/${this.photoPath}`;

		await render(hbs`{{get-image-path this.photoPath}}`);

		assert.dom(this.element).hasText(expectedImagePath);
	});
});
