// const { emailTemplate } = require("./js-foundation/01-template.js");
// require("./js-foundation/02-destructuring.js");
// require("./js-foundation/03-callbacks.js");
// const { getUserById } = require("./js-foundation/04-arrow-functions.js");

const { buildLogger } = require("./plugins");

// getUserById(1, (error, user) => {
// 	if (error) {
// 		throw new Error(error);
// 	}
// 	// console.log(user);
// });

// const { buildMakePerson } = require("./js-foundation/05-factory-functions.js");
// const { getAge, getRandomId } = require("./plugins");

// ! Factory Functions Reference
// const makePerson = buildMakePerson({ getAge, getRandomId });
// const obj = {
// 	name: "Jhon",
// 	birthdate: "09-08-1989",
// };

// const jhonDoe = makePerson(obj);

// console.log(jhonDoe);

// const { getPokemonById } = require("./js-foundation/06-promises");

// ! Promises Reference
// getPokemonById(1)
// 	.then(({ name }) => console.log(name)) // bulbasaur
// 	.catch((err) => console.warn(err.message))
// 	.finally(() => console.log("done")); // done

const logger = buildLogger("foo");

logger.log("Hello world!");
logger.error("Wrong");
