/**
 * Compared to factory method which is just a method to create objects, abstract factory is an object to create families of objects.
 * While factory pattern uses inheritance, abstract factory uses composition.
 * There are 4 concepts here:
 * AbstractProduct, ConcreteProduct, AbstractFactory, ConcreteFactory.
 * 1. ConcreteProduct extends AbstractProduct.
 * 2. ConcreteFactory extends AbstractFactory.
 * 3. ConcreteFactory create a family of AbstractProduct objects.
 */

import PizzaFactory from "./factory";

 /**
  * AbstractProduct
  */
 class Cheese {
    constructor() {
        this.prepareCheese();
    }

    prepareCheese() {
        console.log("please prepare the right cheese.")
    }
 }

 class Sauce {
    constructor() {
        this.prepareSauce();
    }
    
    prepareSauce() {
        console.log("please prepare the right sauce.");
    }
 }

 /**
  * ConcreteProduct
  */
 class GoatCheese extends Cheese {
     prepareCheese() {
         this.type = "goat";
     }
 }

 class MozzarellaCheese extends Cheese {
     prepareCheese() {
         this.type = "mozzarella";
     }
 }

 class TomatoSauce extends Sauce {
    prepareSauce() {
        this.type = "tomato";
    }
 }

 class CaliforniaOilSauce extends Sauce {
    prepareSauce() {
        this.type = "california oil";
    }
 }

 /**
  * AbstractFactory
  */
 class BaseToppingFactory {
    createCheese() {
        console.log("please create cheese object.");
    }
    createSauce() { 
        console.log("please create sauce object.")
    }
 }

 /**
  * ConcreteFactory
  */
 class SicilianToppingFactory extends BaseToppingFactory {
     createCheese() {
         return new MozzarellaCheese();
     }
     createSauce() {
         return new TomatoSauce();
     }
 }

 class GourmetToppingFactory extends BaseToppingFactory {
    createCheese() {
        return new GoatCheese();
    }
    createSauce() {
        return new CaliforniaOilSauce();
    }
 }

export {
    BaseToppingFactory,
    SicilianToppingFactory,
    GourmetToppingFactory,
}




/**
 * Usage.
 * Instead of implemet `addIngredients()` in subclasses of Pizza,
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