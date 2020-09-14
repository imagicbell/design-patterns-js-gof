import {
	Pizza,
	VeggieDecorator,
	CheeseDecorator,
	MeatDecorator
} from '../decorator';

describe("Decorator", () => {
	test("should add additional features to objects dynamically.", () => {
		const pizza = new Pizza(20);
		const veggiePizza  = VeggieDecorator(pizza);
		expect(pizza).toEqual(veggiePizza);
		expect(veggiePizza.ingredients).toEqual(["veggie"]);
		expect(veggiePizza.getPrice()).toBe(25);

		const cheesePizza = CheeseDecorator(pizza);
		expect(pizza).toEqual(cheesePizza);
		expect(cheesePizza.ingredients).toEqual(["veggie", "cheese"]);
		expect(cheesePizza.getPrice()).toBe(33);

		const meatPizza = MeatDecorator(pizza);
		expect(pizza).toEqual(meatPizza);
		expect(cheesePizza.ingredients).toEqual(["veggie", "cheese", "chicken"]);
		expect(cheesePizza.getPrice()).toBe(43);
	})
})