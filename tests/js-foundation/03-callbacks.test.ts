import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks.ts", () => {
	test("should return an error if user not found", () => {
		const id = 10;
		getUserById(id, (err, user) => {
			expect(err).toBe("User not found with Id: " + id);
			expect(user).toBeUndefined();
		});
	});
	test("should return the corresponding user", () => {
		const id = 1;
		getUserById(id, (err, user) => {
			expect(err).toBeNull();
			expect(user).toEqual({ id, name: "John", age: 30 });
		});
	});
});
