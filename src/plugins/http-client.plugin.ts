import axios from "axios";

export const httpClient = {
	get: async (url: string) => {
		const { data } = await axios.get(url);
		return data;
	},
};
