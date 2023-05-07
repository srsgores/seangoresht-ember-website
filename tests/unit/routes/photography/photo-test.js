import {module, test} from "qunit";
import {setupTest} from "ember-qunit";

module("Unit | Route | photography/photo", function (hooks) {
	setupTest(hooks);

	test("it exists", function (assert) {
		let route = this.owner.lookup("route:photography/photo");
		assert.ok(route);
	});
});
