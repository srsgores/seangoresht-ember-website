import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | overlayed-image", function(hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function(assert) {
		await render(hbs`<OverlayedImage/>`);

		assert.dom(this.element).hasText("");

		await render(hbs`
			<OverlayedImage>
				template block text
			</OverlayedImage>
		`);

		assert.dom(this.element).hasText("template block text");
	});
});
