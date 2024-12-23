import { getUserById } from "./js-foundation/03-callbacks";
import { buildMakePerson, Person } from "./js-foundation/05-factory-functions";
import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger, getAge, getRandomId } from "./plugins";

//! Destructuring Reference
require("./js-foundation/02-destructuring");

//! Factory Callbacks Reference
getUserById(1, (error, user) => {
	if (error) {
		throw new Error(error);
	}
	console.log(user); // { id: 1, name: 'John', age: 30 }
});

//! Factory Functions Reference
const makePerson = buildMakePerson({ getAge, getRandomId });
const obj: Person = {
	name: "Jhon",
	birthdate: "09-08-1989",
};

const jhonDoe = makePerson(obj);

console.log(jhonDoe);
/**
{
  id: '22e4d65c-b0b4-470d-bbdf-0431a2bbe3a0',
  name: 'Jhon',
  birthdate: '09-08-1989',
  age: '35 years'
}
 */

//! Promises Reference
getPokemonById(1)
	.then(({ name }) => console.log(name)) // bulbasaur
	.catch((err) => console.warn(err.message))
	.finally(() => console.log("done")); // done

const logger = buildLogger("foo");

//! Logger Reference
logger.log("Hello world!"); // info: Hello world! {"service":"foo","timestamp":"2024-12-23T21:30:24.136Z"}
logger.error("Wrong"); // error: Wrong {"service":"foo","timestamp":"2024-12-23T21:30:36.706Z"}
