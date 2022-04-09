const { isEmpty } = require("../../../dist/lib/es5");

describe(
	"is object empty",
	() => {
		test(
			"true",
			() => {
				expect(isEmpty({})).toBe(true);
			},
		);

		test(
			"false",
			() => {
				expect(isEmpty({ prop: true })).toBe(false);
			},
		);
	},
);
