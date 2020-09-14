/**
 * The decorator pattern attachs additional features to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
 * However, dynamic languages like javascript enables adding additional properties or methods to objects dynamically, which is what the decorator does.
 */

class Pizza {
	constructor(price) {
		this.price = price;
		this.ingredients = [];
	}
}

const VeggieDecorator = pizza => {
	pizza.ingredients.push("veggie");
	pizza.getPrice = () => {
		pizza.price += 5;
		return pizza.price;
	}
	return pizza;
}

const CheeseDecorator = pizza => {
	pizza.ingredients.push("cheese");
	pizza.getPrice = () => {
		pizza.price += 8;
		return pizza.price;
	}
	return pizza;
}

const MeatDecorator = pizza => {
	pizza.ingredients.push("chicken");
	pizza.getPrice = () => {
		pizza.price += 10;
		return pizza.price;
	}
	return pizza;
}

export {
	Pizza,
	VeggieDecorator,
	CheeseDecorator,
	MeatDecorator
}