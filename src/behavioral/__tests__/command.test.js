import {
	Car,
	CarMoveCommand,
	CarStopCommand,
	CarTurnRightCommand,
	CarTurnLeftCommand,
	CarControl
} from '../command';

describe("Command", () => {
	test("invoker should invoke commands without knowing the receiver.", () => {
		const car = new Car();
		const carControl = new CarControl();
		expect(carControl.onButtonPressed(new CarMoveCommand(car))).toBe("move");
		expect(carControl.offButtonPressed(new CarStopCommand(car))).toBe("stop");
		expect(carControl.undoButtonPressed()).toBe("move");
		expect(carControl.leftButtonPressed(new CarTurnLeftCommand(car))).toBe("turn left");
		expect(carControl.rightButtonPressed(new CarTurnRightCommand(car))).toBe("turn right");
	})
})