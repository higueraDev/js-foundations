import winston from "winston";
import { buildLogger } from "../../src/plugins/logger.plugin";
describe("logger.plugin.ts", () => {
	test("should provide a log and error methods", () => {
		const logger = buildLogger("testing");
		expect(typeof logger.log).toBe("function");
		expect(typeof logger.error).toBe("function");
	});
	test("log should be called with service and message arguments", () => {
		const spy = jest.spyOn(winston.Logger.prototype, "log");
		const service = "testing";
		const message = "hello world!";
		const logger = buildLogger(service);
		logger.log(message);
		expect(spy).toHaveBeenCalledWith(
			"info",
			expect.objectContaining({ service, message })
		);
		spy.mockRestore();
	});
});
