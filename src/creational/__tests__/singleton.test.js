import Manager from '../singleton.js';

describe('Singleton', () => {
	test("should instantiate only one instance", () => {
		const Amanager = new Manager();
		const Bmanager = new Manager();
		expect(Amanager).toEqual(Bmanager);
	})
});