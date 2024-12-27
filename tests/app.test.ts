describe("Testing check", () => {
	it("should be 30", () => {
		// 1.A arrange
		const num1 = 10;
		const num2 = 20;
		// 2.A act
		const result = num1 + num2;
		// 3.A assert
		expect(result).toBe(30);
	});
});
