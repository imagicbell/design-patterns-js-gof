import pizza from '../prototype';

describe("Prototype", () => {
	test("", () => {
		const myPizza = Object.create(pizza, { meat: { value: "chicken" }});
		myPizza.bake();
		expect(myPizza.base).toBe("classic");
		expect(myPizza.meat).toBe("chicken");
		expect(myPizza.sauce).toBe("tomato");
		expect(myPizza.cheese).toBe("mozzarella");
		expect(myPizza.bakeTime).toBe(20);
		expect(myPizza.__proto__).toEqual(pizza);
	})
})