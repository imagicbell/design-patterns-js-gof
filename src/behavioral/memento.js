/**
 * The memento pattern captures and externalize an object's internal state without violating encapsulation so that the object can be restored to this state later.
 * It has a memento class that has the same properties with the originator class to keep records of the state information of the originator objects.
 */

class PlayerState {
	constructor() {
		this.hp = 100;
		this.mp = 50;
		this.moveSpeed = 10;
		this.weapon = "knife";
	}

	saveToMemento() {
		const memento = new Memento(this.hp, this.mp, this.moveSpeed, this.weapon);
		return memento;
	}

	undoFromMemento(memento) {
		this.hp = memento.hp;
		this.mp = memento.mp;
		this.moveSpeed = memento.moveSpeed;
		this.weapon = memento.weapon;
	}
}

class Memento {
	constructor(hp, mp, moveSpeed, weapon) {
		this.hp = hp;
		this.mp = mp;
		this.moveSpeed = moveSpeed;
		this.weapon = weapon;
	}
}

class Caretaker {
	constructor() {
		this.mementos = []
	}

	getMemento() {
		return this.mementos.pop();
	}

	addMemento(memento) {
		this.mementos.push(memento);
	}
}

export {
	PlayerState,
	Memento,
	Caretaker,
}

 