/**
 * The facade pattern	provides a unified interface to a set of interfaces in a subsystem. 
 * The client only needs to interact with the facade instead of the individual subsystem interfaces. It makes the subsystem easier to use.
 */

class Menu {
	checkInventory(pizzaId) {
		return pizzaId > 0 && pizzaId < 100;
	}
}

class Payment {
	makePayment(pizzaId) {
		return 20 + pizzaId * 0.1;
	}
}

class Shipping {
	shipPizza(distance) {
		return distance < 3 ? 0 : 3 + (distance - 3) * 2;
	}
}

class PizzaServiceFacade {
	constructor() {
		this.menu = new Menu();
		this.payment = new Payment();
		this.shipping = new Shipping();
	}

	orderPizza(pizzaId, distance) {
		if (!this.menu.checkInventory(pizzaId))
			return -1;

		let price = this.payment.makePayment(pizzaId);
		price += this.shipping.shipPizza(distance);
		return price;
	}
}

export default PizzaServiceFacade;