import { httpClient } from "../../src/plugins/http-client.plugin";

describe("http-client.plugin.ts", () => {
	test("should return a string", async () => {
		const data = {};
		const response = await httpClient.get(
			"https://jsonplaceholder.typicode.com/todos/1"
		);
		expect(response).toEqual({
			completed: expect.any(Boolean),
			id: 1,
			title: "delectus aut autem",
			userId: 1,
		});
	});
	test("should have CRUD methods", () => {
		expect(typeof httpClient.post).toBe("function");
		expect(typeof httpClient.put).toBe("function");
		expect(typeof httpClient.delete).toBe("function");
	});
});
