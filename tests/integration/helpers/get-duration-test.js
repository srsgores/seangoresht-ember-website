import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render, setupOnerror} from "@ember/test-helpers";
import {MISSING_DATE_ERROR_MESSAGE, MISSING_POSITIONAL_PARAM_ERROR_MESSAGE} from "seangoresht-ember-website/helpers/get-duration";
import {hbs} from "ember-cli-htmlbars";

const ERROR_PREFIX = "Assertion Failed: ";

module("Integration | Helper | get-duration", function (hooks) {
	setupRenderingTest(hooks);

	test("it throws an error if no positional arguments provided", async function (assert) {
		setupOnerror(function (error) {
			assert.equal(error.message, `${ERROR_PREFIX}${MISSING_POSITIONAL_PARAM_ERROR_MESSAGE}`);
		});
		await render(hbs`{{get-duration}}`);
	});

	test("it throws an error if positional argument not a date", async function (assert) {
		this.startDate = new Date().getFullYear();
		setupOnerror(function (error) {
			assert.ok(error.message.includes(`${ERROR_PREFIX}${MISSING_DATE_ERROR_MESSAGE}`));
		});
		await render(hbs`{{get-duration this.startDate}}`);
	});

	test("it subtracts the date start year from today's year", async function (assert) {
		const today = new Date();
		const thisYear = new Date().getFullYear();
		const lastYearDate = new Date(thisYear - 1, today.getMonth(), today.getDate());
		const lastYear = thisYear - 1;
		this.startDate = lastYearDate;
		const expectedDurationInYears = `${thisYear - lastYear} year`;

		await render(hbs`{{get-duration this.startDate}}`);
		assert.dom(this.element).hasText(expectedDurationInYears);
	});

	test("it pluralizes years if duration is greater than 1", async function (assert) {
		const today = new Date();
		const thisYear = today.getFullYear();
		const yearDifference = 2;
		this.startDate = new Date(thisYear - yearDifference, today.getMonth(), today.getDate());

		await render(hbs`{{get-duration this.startDate}}`);
		assert.dom(this.element).hasText(`${yearDifference} years`);
	});

	test("it pluralizes months if duration is greater than 1", async function (assert) {
		const today = new Date();
		const thisYear = today.getFullYear();
		const monthDifference = 2;
		this.startDate = new Date(thisYear, today.getMonth() - monthDifference, today.getDate());

		await render(hbs`{{get-duration this.startDate}}`);
		assert.dom(this.element).hasText(`${monthDifference} months`);
	});

	test("It calculates the duration from the supplied end date", async function (assert) {
		const today = new Date();
		const thisYear = today.getFullYear();
		const monthDifference = 2;
		this.endDate = new Date(thisYear, today.getMonth() - monthDifference, today.getDate());
		this.startDate = new Date(thisYear - 1, today.getMonth(), today.getDate());
		const expectedDurationInMonths = `${monthDifference} months`;

		await render(hbs`{{get-duration this.startDate this.endDate}}`);
		assert.dom(this.element).hasText(expectedDurationInMonths);
	});

	test("It omits month when format=\"short\"", async function (assert) {
		const today = new Date();
		const thisYear = today.getFullYear();
		const monthDifference = 2;
		this.endDate = new Date(thisYear, today.getMonth() - monthDifference, today.getDate());
		this.startDate = new Date(thisYear - 1, today.getMonth(), today.getDate());
		const expectedDurationInMonths = `${monthDifference} months`;

		await render(hbs`{{get-duration this.startDate this.endDate format="short"}}`);
		assert.dom(this.element).doesNotIncludeText(expectedDurationInMonths);
	});

	test("It rounds up year by .5 increments when format=\"short\"", async function (assert) {
		const today = new Date();
		const thisYear = today.getFullYear();
		const monthDifference = 6; // 6 should mean .5 years
		const yearDifference = 1;
		this.endDate = new Date(thisYear, today.getMonth() - monthDifference, today.getDate());
		this.startDate = new Date(thisYear - yearDifference, today.getMonth(), today.getDate());
		const expectedShortenedDuration = `${yearDifference}.5 years`;

		await render(hbs`{{get-duration this.startDate this.endDate format="short"}}`);
		assert.dom(this.element).hasText(expectedShortenedDuration);
	});
});
