/**
 * Prototype pattern creates an object by copying the prototype object which is defined in advance.
 * It applies to the senario where making constructor calls to initialize states cost plenty of time, or there are a large number of objects to be constructed at one time.
 * The prototypal inheritance in Javascript natively supports this pattern.
 */

const pizza = {
	base: "classic",
	meat: "beef",
	sauce: "tomato",
	cheese: "mozzarella",
	bake() {
		this.bakeTime = 20;
	}
};

const myPizza = Object.create(pizza, { meat: { value: "chicken" }});

export default pizza;