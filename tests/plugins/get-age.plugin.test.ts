import { getAge } from "../../src/plugins/get-age.plugin";
describe("get-age.plugin.ts", () => {
	test("should calculate age", () => {
		const expectedAge = 35;
		const yy = new Date().getFullYear() - expectedAge;
		const date = new Date();
		date.setFullYear(yy);
		const age = getAge(date.toLocaleDateString());
		expect(age).toBe(expectedAge);
	});

	test("should return 0", () => {
		const spy = jest
			.spyOn(Date.prototype, "getUTCFullYear")
			.mockReturnValue(2015);
		const birthdate = new Date();
		birthdate.setUTCFullYear(2015);
		const age = getAge(birthdate.toLocaleString());
		expect(age).toBe(0);
		expect(spy).toHaveBeenCalledTimes(2);
	});
});
