import { characters } from "../../src/js-foundation/02-destructuring";

describe("02-destructuring.ts", () => {
	test("should contain flash and superman", () => {
		expect(characters).toContain("Flash");
		expect(characters).toContain("Superman");
	});

	test("first characters should be flash", () => {
		expect(characters[0]).toBe("Flash");
	});
});
