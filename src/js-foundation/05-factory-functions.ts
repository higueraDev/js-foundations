import { GetAge, GetRandomId } from "../plugins";

interface MakePersonDependencies {
	getAge: GetAge;
	getRandomId: GetRandomId;
}

export interface Person {
	name: string;
	birthdate: string;
	id?: string;
	age?: string;
}

export const buildMakePerson =
	({ getAge, getRandomId }: MakePersonDependencies) =>
	({ name, birthdate }: Person) => ({
		id: getRandomId(),
		name,
		birthdate,
		age: getAge(birthdate) + " years",
	});
