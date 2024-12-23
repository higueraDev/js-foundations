import { Pokemon } from "../interfaces/getPokemonByIdResponse";

const { httpClient } = require("../plugins/http-client.plugin");

export const getPokemonById = async (id: number): Promise<Pokemon> => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await httpClient.get(url);
	return pokemon;
};
