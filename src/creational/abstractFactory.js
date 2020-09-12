/**
 * Compared to factory method which is just a method to create objects, abstract factory is an object to create families of objects.
 * While factory pattern uses inheritance, abstract factory uses composition.
 */

class GoatCheese {
    constructor() {
        this.type = "goat";
    }
}

class MozzarellaCheese {
    constructor() {
        this.type = "mozzarella";
    }
}

class TomatoSauce {
    constructor() {
        this.type = "tomato";
    }
}

class CaliforniaOilSauce {
    constructor() {
        this.type = "california oil";
    }
}

class SicilianToppingFactory {
    createCheese() {
        return new MozzarellaCheese();
    }
    createSauce() {
        return new TomatoSauce();
    }
}

class GourmetToppingFactory {
    createCheese() {
        return new GoatCheese();
    }
    createSauce() {
        return new CaliforniaOilSauce();
    }
}

export {
    SicilianToppingFactory,
    GourmetToppingFactory,
}




/**
 * Usage.
 * Instead of implementing `addIngredients()` in individual class of Pizza,
 * we only need to delegate the responsibility to different `ToppingFactory` to create different ingredients in a composite way.
 * After we composite different ingredients(AbstractProduct) in different ways, we can create multiple different pizzas.
 */
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

const sicilianPizza = new Pizza(new SicilianToppingFactory());
const gourmetPizza = new Pizza(new GourmetToppingFactory());