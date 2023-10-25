import {helper} from "@ember/component/helper";
import {assert, warn} from "@ember/debug";

export const MISSING_POSITIONAL_PARAM_ERROR_MESSAGE = "get-duration called with no positional params!";
export const MISSING_DATE_ERROR_MESSAGE = "get-duration helper requires a date";

export const DATE_AFTER_TODAY_WARNING_MESSAGE = "get-duration helper called with date after today.  This will result in a negative duration.  Did you mean this?";
export const TRANSLATIONS = {
	year: "year",
	month: "month"
};

export default helper(function getDuration(positional/*, named*/) {
	const [date] = positional;
	const now = new Date();
	assert(MISSING_POSITIONAL_PARAM_ERROR_MESSAGE, date);
	assert(`${MISSING_DATE_ERROR_MESSAGE}; got ${typeof date}`, date instanceof Date);
	warn(DATE_AFTER_TODAY_WARNING_MESSAGE, date < now, {id: "get-duration.invalid-date"});
	const years = now.getFullYear() - date.getFullYear();
	const months = now.getMonth() - date.getMonth();

	let duration = "";

	if (years > 0) {
		duration = `${years} ${TRANSLATIONS.year}${years > 1 ? "s" : ""}`;
	}

	if (months > 0) {
		duration += `${years > 0 ? ", " : ""}${months} ${TRANSLATIONS.month}${months > 1 ? "s" : ""}`;
	}

	return duration;
});
