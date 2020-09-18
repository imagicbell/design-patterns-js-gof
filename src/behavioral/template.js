/**
 * The template pattern defines the skeleton of an algorithm as an abstract class, allowing its subclasses to redefine certain behaviors without changing the algorthm's structure.
 * The interface method in the abstrac class is called template method, which is called by the clients.
 */

class PizzaMaker {
	constructor(pizza) {
		this.pizza = pizza;
	}

	preparePizzaDough() {
		return `prepare dough for pizza ${this.pizza}`;
	}

	preBakeCrust() {
		return `prebake crust for pizza ${this.pizza}`;
	}
	
	prepareIngredients() {
		return `prepare ingredients: ${this.getIngredients()}`;
	}

	addToppings() {
		return `add toppings: ${this.getToppings()}`;
	}
				
	bakePizza() {
		return `bake pizza ${this.pizza}`;
	}
} 

class VeggiePizzaMaker extends PizzaMaker {
	constructor() {
		super("veggie");
	}

	getIngredients() {
		return "tomato, mushrooms."
	}

	getToppings() {
		return "mozzerella cheese, tomato sauce."
	}
}

class MeatPizzaMaker extends PizzaMaker {
	constructor() {
		super("meat");
	}

	getIngredients() {
		return "beef, chicken";
	}

	getToppings() {
		return "goat cheese, BBQ sauce."
	}
}

export {
	VeggiePizzaMaker,
	MeatPizzaMaker,
}