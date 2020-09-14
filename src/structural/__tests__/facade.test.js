import PizzaServiceFacade from '../facade';

describe("Facade", () => {
	test("should unify the calls to the subsystem.", () => {
		const pizzaService = new PizzaServiceFacade();
		expect(pizzaService.orderPizza(-1)).toBe(-1);
		expect(pizzaService.orderPizza(10000)).toBe(-1);
		expect(pizzaService.orderPizza(20, 2)).toBe(22);
		expect(pizzaService.orderPizza(50, 5)).toBe(32);
	})
})