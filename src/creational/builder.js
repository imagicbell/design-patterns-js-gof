/**
 * The builder pattern enforces a step-by-step process to construct a complex object.
 * It is similiar to the abstract factory pattern. 
 * But it is about creating an object through step-by-step process and resulting the object as the final step,
 * while abstract factory emphasize creating a family of related objects in one go.
 */

/**
 * Product
 */
class Pizza {
    constructor() {
        this.base = null;
        this.meat = null;
        this.sauce = null;
        this.cheese = null;
    }
}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }
    
    final() {
        return this.pizza;
    }
}

class SicilianPizzaBuilder extends PizzaBuilder {
    makeBase() {
        this.pizza.base = "classic";
        return this;
    }

    addMeat() {
        this.pizza.meat = "beef";
        return this;
    }

    addSauce() {
        this.pizza.sauce = "tomato";
        return this;
    }

    addCheese() {
        this.pizza.cheese = "mozzarella";
        return this;
    }
}

class GourmetPizzaBuilder extends PizzaBuilder {
    makeBase() {
        this.pizza.base = "thick";
        return this;
    }

    addMeat() {
        this.pizza.meat = "chicken";
        return this;
    }

    addSauce() {
        this.pizza.sauce = "california oil";
        return this;
    }

    addCheese() {
        this.pizza.cheese = "goat";
        return this;
    }
}


export {
    SicilianPizzaBuilder,
    GourmetPizzaBuilder,
}


/**
 * Usage
 * Use the builder to create an object in a step-by-step manner.
 */
const makePizza = (pizzaBuilder) => {
    return pizzaBuilder.makeBase()
                        .addMeat()
                        .addSauce()
                        .addCheese()
                        .final();
}
makePizza(new SicilianPizzaBuilder());
makePizza(new GourmetPizzaBuilder());



