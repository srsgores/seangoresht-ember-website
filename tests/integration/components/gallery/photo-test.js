import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | gallery/photo", function (hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function (assert) {

		await render(hbs`<Gallery::Photo/>`);

		assert.dom(this.element).hasText("");

		// Template block usage:
		await render(hbs`
      <Gallery::Photo>
        template block text
      </Gallery::Photo>
    `);

		assert.dom(this.element).hasText("template block text");
	});
});
