import { SicilianPizzaBuilder, GourmetPizzaBuilder } from '../builder';

const makePizza = (pizzaBuilder) => {
	return pizzaBuilder.makeBase()
											.addMeat()
											.addSauce()
											.addCheese()
											.final();
}

describe("Builder", () => {
	test('SicilianPizzaBuilder should create sicilian pizza ', () => {
		const pizza = makePizza(new SicilianPizzaBuilder());
		expect(pizza.base).toBe("classic");
		expect(pizza.meat).toBe("beef");
		expect(pizza.sauce).toBe("tomato");
		expect(pizza.cheese).toBe("mozzarella");
	});
	test('GourmetPizzaBuilder should create gourmet pizza', () => {
		const pizza = makePizza(new GourmetPizzaBuilder());
		expect(pizza.base).toBe("thick");
		expect(pizza.meat).toBe("chicken");
		expect(pizza.sauce).toBe("california oil");
		expect(pizza.cheese).toBe("goat");
	})
	
})