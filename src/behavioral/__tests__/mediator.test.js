import {
	ControlTower,
	Airplane,
	Runway
} from '../mediator';

describe("Mediator", () => {
	test("should controls the interactions between objects", () => {
		const tower = new ControlTower();

		const airplane1 = new Airplane(tower);
		const airplane2 = new Airplane(tower);

		const runway = new Runway();

		tower.registerAirplane(airplane1);
		tower.registerAirplane(airplane2);
		tower.registerRunway(runway);

		expect(airplane1.requestRunway()).toBe(true);
		expect(airplane2.requestRunway()).toBe(false);
		
		airplane1.releaseRunway();
		
		expect(airplane2.requestRunway()).toBe(true);
	})
})