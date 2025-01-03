import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("06-promises.ts", () => {
	test("should return a pokemon object", async () => {
		const id = 1;
		const pokemon = await getPokemonById(id);
		expect(pokemon.name).toEqual("bulbasaur");
	});
	test("should return an error", async () => {
		try {
			const id = -1;
			const pokemon = await getPokemonById(id);
		} catch (error: any) {
			expect(error.message).toBe("Request failed with status code 404");
		}
	});
});
