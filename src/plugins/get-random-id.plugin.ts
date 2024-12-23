import { v4 } from "uuid";

export type GetRandomId = () => string;
export const getRandomId = () => v4();
