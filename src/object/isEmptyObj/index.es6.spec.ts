import { isEmpty } from "../../../dist/lib/es6";

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
