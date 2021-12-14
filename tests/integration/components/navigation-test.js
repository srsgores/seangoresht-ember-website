import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | navigation", function(hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function(assert) {

		await render(hbs`<Navigation/>`);

		assert.dom(this.element).hasText("");

		await render(hbs`
			<Navigation>
				template block text
			</Navigation>
		`);

		assert.dom(this.element).hasText("template block text");
	});
});
