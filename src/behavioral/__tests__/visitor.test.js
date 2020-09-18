import {
	Manager,
	Developer,
	BonusVisitor,
	PensionVisitor
} from '../visitor';

describe("Visitor", () => {
	test("should separate the algorithm from its client's object structure.", () => {
		const manager = new Manager(10000);
		const developer = new Developer(5000);

		expect(manager.accept(new BonusVisitor())).toBe(2000);
		expect(developer.accept(new BonusVisitor)).toBe(500);

		expect(manager.accept(new PensionVisitor())).toBe(5000);
		expect(developer.accept(new PensionVisitor())).toBe(1500);
	})
})