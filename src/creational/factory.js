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

      pizza.addIngredients(type);
      return pizza;
    }
 }

 class Pizza {
    addIngredients(type) {
      this.type = type;
    }

    bake() {
      console.log("default bake 20min")
    }
 }

 class CheesePizza extends Pizza {
    bake() {
      console.log("bake 25min")
    }
 }

 class VeggiePizza extends Pizza {
    bake() {
      console.log("bake 15min")
    }
 }

 export default PizzaFactory;