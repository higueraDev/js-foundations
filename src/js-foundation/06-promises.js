const { httpClient } = require("../plugins/http-client.plugin");

const getPokemonById = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await httpClient.get(url);
	return pokemon;
};

module.exports = {
	getPokemonById,
};
