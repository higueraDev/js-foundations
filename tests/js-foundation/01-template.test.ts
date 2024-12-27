import { emailTemplate } from "../../src/js-foundation/01-template";

describe("01-template.ts", () => {
	test("should contain a greeting", () => {
		expect(emailTemplate).toContain("Hi,");
	});

	test("should contain {{name}} and {{orderId}}", () => {
		expect(emailTemplate).toMatch(/{{name}}/);
		expect(emailTemplate).toMatch(/{{orderId}}/);
	});
});
