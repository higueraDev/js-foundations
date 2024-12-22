const users = [
	{ id: 1, name: "John", age: 30 },
	{ id: 2, name: "Mike", age: 23 },
	{ id: 3, name: "Jane", age: 25 },
];

const getUserById = (id, callback) => {
	const user = users.find((user) => user.id === id);
	return user
		? callback(null, user)
		: callback(`User not found with Id: ${id}`);
};

module.exports = {
	getUserById,
};
