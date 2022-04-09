const { cleanEmptyProps } = require("../../../dist/lib/es5");

describe(
	"clean object from empty props",
	() => {
		test.skip(
			"cleanEmptyProps 1",
			() => {
				expect(
					cleanEmptyProps({
						text: "text",
						anotherText: "another text",
						emptyText: "",
					}),
				).toBe({ text: "text", anotherText: "another text" });
			},
		);

		test.skip(
			"cleanEmptyProps 2 ",
			() => {
				expect({
					text: "text",
					anotherText: "another text",
					nestedObject: { emptyText: "" },
				}).toBe({ text: "text", anotherText: "another text" });
			},
		);
	},
);
