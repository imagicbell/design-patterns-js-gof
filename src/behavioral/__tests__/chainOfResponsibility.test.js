import BugService from '../chainOfResponsibility'

describe("Chain of Responsibility", () => {
	test("should pass a request to a chain of processing objects.", () => {
		const bugService = new BugService();
		expect(bugService.solveBug(5)).toBe("frontend");
		expect(bugService.solveBug(55)).toBe("backend");
	})
})