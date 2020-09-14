/**
 * For short, the composite pattern takes a group of objects into a single object.
 * It composes objects into tree structures to represent part-whole hierarchies, where "part" represents individual object and "whole" represents a collection of parts.
 * Clients treat individual objects(parts) and compositions of objects(wholes) uniformly
 */

class Food {
	constructor(price) {
		this.price = price;
	}

	getPrice() {
		return this.price;
	}
}

class SetMeal extends Food {
	constructor() {
		super(0);
		this.foodList = [];
	}

	addFood(food) {
		this.foodList.push(food);
	}

	removeFood(food) {
		let index = this.foodList.indexOf(food);
		if (index >= 0)
			this.foodList.splice(index, 1);
	}

	getPrice() {
		return this.foodList.map(food => food.getPrice())
												.reduce((a, b) => a + b);
	}
}

class Beef extends Food {
	constructor() {
		super(20);
	}
}

class Potato extends Food {
	constructor() {
		super(2);
	}
}

class Tomato extends Food {
	constructor() {
		super(5);
	}
}

export {
	Food,
	SetMeal,
	Beef,
	Potato,
	Tomato
}