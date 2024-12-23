interface User {
	id: number;
	name: string;
	age: number;
}

type GetUserByIdCallback = (message: string | null, user?: User) => void;

const users: User[] = [
	{ id: 1, name: "John", age: 30 },
	{ id: 2, name: "Mike", age: 23 },
	{ id: 3, name: "Jane", age: 25 },
];

export const getUserById = (id: User["id"], callback: GetUserByIdCallback) => {
	const user = users.find(function (user) {
		return user.id === id;
	});
	if (!user) return callback(`User not found with Id: ${id}`);
	return callback(null, user);
};
