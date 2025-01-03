import axios from "axios";

export const httpClient = {
	get: async (url: string) => {
		const { data } = await axios.get(url);
		return data;
	},
	post: async () => {
		throw new Error("Method not implemented");
	},
	put: async () => {
		throw new Error("Method not implemented");
	},
	delete: async () => {
		throw new Error("Method not implemented");
	},
};
