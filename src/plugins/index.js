const { getAge } = require("./get-age.plugin");
const { getRandomId } = require("./get-random-id.plugin");
const { httpClient } = require("./http-client.plugin");
const { buildLogger } = require("./logger.plugin");

module.exports = {
	getRandomId,
	getAge,
	httpClient,
	buildLogger,
};
