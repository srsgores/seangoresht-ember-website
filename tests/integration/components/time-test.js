import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | time", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {
		await render(hbs`<Time />`);

		assert.dom(this.element).hasText("");

		// Template block usage:
		await render(hbs`
		<Time>
			template block text
		</Time>
	`);

		assert.dom(this.element).hasText("template block text");
	});
});
