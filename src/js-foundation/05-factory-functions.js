const buildMakePerson =
	({ getAge, getRandomId }) =>
	({ name, birthdate }) => ({
		id: getRandomId(),
		name,
		birthdate,
		age: getAge(birthdate) + " years",
	});

module.exports = {
	buildMakePerson,
};
