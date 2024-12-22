const users = [
	{ id: 1, name: "John", age: 30 },
	{ id: 2, name: "Mike", age: 23 },
	{ id: 3, name: "Jane", age: 25 },
];

function getUserById(id, callback) {
	const user = users.find(function (user) {
		return user.id === id;
	});
	if (!user) return callback(`User not found with Id: ${id}`);
	return callback(null, user);
}

module.exports = {
	getUserById,
};
