import {
	makeIterator,
	makeGenerator,
	IterableClass
} from '../iterator';

describe("Iterator", () => {
	test("should make object iterable.", () => {
		const it = makeIterator([1, 2, 3]);
		expect(it.next().value).toBe(1);
		expect(it.next().value).toBe(2);
		expect(it.next().value).toBe(3);
		expect(it.next().done).toBe(true);

		const gen = makeGenerator([1, 2, 3]);
		expect(gen.next().value).toBe(1);
		expect(gen.next().value).toBe(2);
		expect(gen.next().value).toBe(3);
		expect(gen.next().done).toBe(true);

		let array = [1, 2, 3];
		const myArray = new IterableClass(array);
		let index = 0;
		for (let v of myArray) {
			expect(v).toBe(array[index++]);
		}
	})
})