import {
	Value, 
	Add,
	Subtract
} from '../observer';

describe("Observer", () => {
	test("one object should notify other objects of its change.", () => {
		const value = new Value();
		const add = new Add();
		const sub = new Subtract();
		
		value.register(add);
		value.register(sub);
		value.notifyAll(1);
		expect(add.value).toBe(1);
		expect(sub.value).toBe(-1);

		value.unregister(sub);
		value.notifyAll(2);
		expect(add.value).toBe(3);
		expect(sub.value).toBe(-1);
	})
})