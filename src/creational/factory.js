/**
 * Factory provides an interface to create objects that have similar features, e.g. objects of subclasses extending the same base class.
 */

 class PizzaFactory {
    static create(type) {
      let pizza;
      switch (type) {
        case "cheese":
          pizza = new CheesePizza();
          break;

      case "veggie":
        pizza = new VeggiePizza();
        break;

        default:
          throw "No such pizza"
      }

      pizza.addIngredients();
      return pizza;
    }
 }

 class Pizza {
    addIngredients() {
      console.log("please add ingredient");
    }

    bake() {
      console.log("default bake 20min")
    }
 }

 class CheesePizza extends Pizza {
    addIngredients() {
      this.ingredient = "cheese";
    }
 }

 class VeggiePizza extends Pizza {
    addIngredients() {
      this.ingredient = "veggie";
    }
 }

 export default PizzaFactory;