/**
 * The observer pattern defines a one-to-many dependency between objects, so that when one object, which is called Subject, changes state, all of its dependents, which is called Observer, are notified and updated automatically.
 * This is also called Pub/Sub (publish-subscribe) pattern, which is a message pattern commonly used in messaging system.
 * It also called Event Dispatcher/Listener pattern.
 */

class Value {
	constructor() {
		this.observers = [];
	}

	register(observer) {
		this.observers.push(observer);
	}

	unregister(observer) {
		let index = this.observers.indexOf(observer);
		if (index < 0) 
			return;
		this.observers.splice(index, 1);
	}

	notifyAll(change) {
		this.observers.forEach(observer => observer.update(change));
	}
}

class Add {
	constructor() {
		this.value = 0;
	}

	update(change) {
		this.value += change;
	}
}

class Subtract {
	constructor() {
		this.value = 0;
	}

	update(change) {
		this.value -= change;
	}
}

export {
	Value, 
	Add,
	Subtract
}