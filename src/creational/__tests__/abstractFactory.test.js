import { SicilianToppingFactory, GourmetToppingFactory } from '../abstractFactory';
import PizzaFactory from '../factory';

class Pizza {
    constructor(toppingFactory) {
        this.toppingFactory = toppingFactory;
        this.addIngredients();
    }
    addIngredients() {
        this.cheese = this.toppingFactory.createCheese();
        this.sauce = this.toppingFactory.createSauce();
    }
}

describe("AbstractFactory", () => {
    test("sicilianPizza should have MozzarellaCheese and TomatoSauce", () => {
        const sicilianPizza = new Pizza(new SicilianToppingFactory());
        expect(sicilianPizza.cheese.type).toBe('mozzarella');
        expect(sicilianPizza.sauce.type).toBe("tomato");
    });
    test("gourmetPizza should have GoatCheese and CaliforniaOilSauce", () => {
        const gourmetPizza = new Pizza(new GourmetToppingFactory());
        expect(gourmetPizza.cheese.type).toBe("goat");
        expect(gourmetPizza.sauce.type).toBe("california oil");
    })
})