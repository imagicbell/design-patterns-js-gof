import {
	Food,
	SetMeal,
	Beef,
	Potato,
	Tomato
} from '../composite';

describe("Composite", () => {
	test("composite and individual object should work in the same way in getPrice", () => {
		const beef = new Beef();
		const potato = new Potato();
		const tomato = new Tomato();
		const setMeal = new SetMeal();
		setMeal.addFood(beef);
		setMeal.addFood(potato);
		setMeal.addFood(tomato);
		expect(setMeal.getPrice()).toBe(beef.getPrice() + potato.getPrice() + tomato.getPrice());
	})
})