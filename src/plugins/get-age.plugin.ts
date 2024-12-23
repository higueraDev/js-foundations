const getAgePlugin = require("get-age");

export type GetAge = (birthdate: string) => string | Error;

export const getAge: GetAge = (birthdate: string) => {
	if (!birthdate) return new Error("birthdate is required");
	return getAgePlugin(birthdate);
};
