/**
 * The state pattern allows an object to alter its behavior when its internal state changes.
 * It encapsulates the state of the object into separate classes, and at runtime delegates to the object representing its current state through polymorphism.
 * The state classes handle the logic of changing between other states.
 */

class TrafficLight {
	constructor() {
		this.states = {
			'green' : new GreenState(this),
			'yellow' : new YellowState(this),
			'red' : new RedState(this)
		};
		this.currentState = this.states['green'];
	}

	changeState(nextState) {
		if (nextState in this.states)
			this.currentState = this.states[nextState];
	}
} 

class LightState {
	constructor(color, light) {
		this.color =	color;
		this.light = light;
	}
}

class GreenState extends LightState {
	constructor(light) {
		super('green', light);
	}

	onTimeout() {
		this.light.changeState('yellow');
	}
}

class YellowState extends LightState {
	constructor(light) {
		super('yellow', light);
	}

	onTimeout() {
		this.light.changeState('red');
	}
}

class RedState extends LightState {
	constructor(light) {
		super('red', light);
	}

	onTimeout() {
		this.light.changeState('green');
	}
}

export default TrafficLight;

