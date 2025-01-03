import { buildMakePerson } from "../../src/js-foundation/05-factory-functions";
const makePersonDependencies = {
	getAge: () => "",
	getRandomId: () => "",
};
describe("05-factory-functions.ts", () => {
	test("should return a function", () => {
		const makePerson = buildMakePerson(makePersonDependencies);
		expect(typeof makePerson === "function");
	});
	test("should return a Person object", () => {
		const makePerson = buildMakePerson(makePersonDependencies);
		const johnDoe = makePerson({
			birthdate: "1989-08-09",
			name: "John",
			age: "25",
		});
		const person = makePerson(johnDoe);
		expect(person).toEqual({
			...johnDoe,
			id: makePersonDependencies.getRandomId(),
		});
	});
});
