import PizzaFactory from "../factory";

describe("Factory", () => {
  test('should create VeggiePizza', () => {
    let veggiePizza = PizzaFactory.create("veggie");
    expect(veggiePizza.ingredient).toBe("veggie");
  });
  test('should create CheesePizza', () => {
    let cheesePizza = PizzaFactory.create("cheese");
    expect(cheesePizza.ingredient).toBe("cheese");
  })
  
})
