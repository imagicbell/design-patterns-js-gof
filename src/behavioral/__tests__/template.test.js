import {
	VeggiePizzaMaker,
	MeatPizzaMaker,
} from '../template';

describe("Template", () => {
	test("define the skeleton of an algorithm and allow its subclasses to redefine certain behaviors.", () => {
		const veggiePizzaMaker = new VeggiePizzaMaker();
		expect(veggiePizzaMaker.preBakeCrust()).toBe("prebake crust for pizza veggie");
		expect(veggiePizzaMaker.prepareIngredients()).toBe("prepare ingredients: tomato, mushrooms.");
		expect(veggiePizzaMaker.addToppings()).toBe("add toppings: mozzerella cheese, tomato sauce.");

		const meatPizzaMaker = new MeatPizzaMaker();
		expect(meatPizzaMaker.preparePizzaDough()).toBe("prepare dough for pizza meat");
		expect(meatPizzaMaker.prepareIngredients()).toBe("prepare ingredients: beef, chicken");
		expect(meatPizzaMaker.addToppings()).toBe("add toppings: goat cheese, BBQ sauce.");
	})
})