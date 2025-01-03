import { getRandomId } from "../../src/plugins/get-random-id.plugin";
describe("get-random-id.ts", () => {
	test("should return a string", () => {
		expect(typeof getRandomId()).toBe("string");
		expect(getRandomId()).toHaveLength(36);
	});
});
