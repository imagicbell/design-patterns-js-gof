import TrafficLight from '../state';

describe("State", () => {
	test("should handle the state change logic for the object.", () => {
		const trafficLight = new TrafficLight();
		
		trafficLight.changeState('green');
		expect(trafficLight.currentState.color).toBe('green');

		trafficLight.currentState.onTimeout();
		expect(trafficLight.currentState.color).toBe('yellow');

		trafficLight.currentState.onTimeout();
		expect(trafficLight.currentState.color).toBe('red');

		trafficLight.currentState.onTimeout();
		expect(trafficLight.currentState.color).toBe('green');
	})
})