/**
 * The mediator pattern is used to loose coupling between set of objects by handling interactions between them.
 * All the interaction logic is delegated to the mediator object, thus when an object is updated, we only need to update the mediator object.
 */

class ControlTower {
	constructor() {
		this.airplanes = [];
		this.runways = [];
		this.runwayUsage = new Map();
	}

	registerAirplane(airplane) {
		this.airplanes.push(airplane);
	}

	registerRunway(runway) {
		this.runways.push(runway);
	}

	assignRunway(airplane) {
		let index = this.runways.findIndex(runway => runway.isAvailable());
		if (index < 0) 
			return false;
		this.runways[index].setOccupied();
		this.runwayUsage.set(airplane, this.runways[index]);
		return true;
	}

	releaseRunway(airplane) {
		if (!this.runwayUsage.has(airplane))
			return;
		this.runwayUsage.get(airplane).setFree();
		this.runwayUsage.delete(airplane);
	}
}

class Airplane {
	constructor(controlTower) {
		this.controlTower = controlTower;
	}

	requestRunway() {
		return this.controlTower.assignRunway();
	}

	releaseRunway() {
		this.controlTower.releaseRunway();
	}
}

class Runway {
	constructor() {
		this.occupied = false;
	}

	isAvailable() {
		return !this.occupied;
	}

	setOccupied() {
		this.occupied = true;
	}

	setFree() {
		this.occupied = false;
	}
}

export {
	ControlTower,
	Airplane,
	Runway
}