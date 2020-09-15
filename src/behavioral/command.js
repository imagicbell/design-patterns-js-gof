/**
 * The command pattern encapsulates the request as an object, which can be stored and passed through the applications, and support undo operations.
 * Thus it decouples the invoker and recevier. The invoker invokes a command without knowing anything about the receiver.
 */

class Car {
	move() {
		return "move";
	}

	stop() {
		return "stop";
	}

	turnLeft() {
		return "turn left";
	}

	turnRight() {
		return "turn right";
	}
}

class CarMoveCommand {
	constructor(car) {
		this.car = car;
	}

	execute() {
		return this.car.move();
	}

	undo() {
		return this.car.stop();
	}
}

class CarStopCommand {
	constructor(car) {
		this.car = car;
	}

	execute() {
		return this.car.stop();
	}

	undo() {
		return this.car.move();
	}
}

class CarTurnRightCommand {
	constructor(car) {
		this.car = car;
	}

	execute() {
		return this.car.turnRight();
	}

	undo() {
		return this.car.turnLeft();
	}
}

class CarTurnLeftCommand {
	constructor(car) {
		this.car = car;
	}

	execute() {
		return this.car.turnLeft();
	}

	undo() {
		return this.car.turnRight();
	}
}

class CarControl {
	constructor() {
		this.lastCmd = null;
	}

	onButtonPressed(carMoveCmd) {
		this.lastCmd = carMoveCmd;
		return carMoveCmd.execute();
	}

	offButtonPressed(carStopCmd) {
		this.lastCmd = carStopCmd;
		return carStopCmd.execute();
	}

	rightButtonPressed(carTurnRightCmd) {
		this.lastCmd = carTurnRightCmd;
		return carTurnRightCmd.execute();
	}

	leftButtonPressed(carTurnLeftCmd) {
		this.lastCmd = carTurnLeftCmd;
		return carTurnLeftCmd.execute();
	}

	undoButtonPressed() {
		if (this.lastCmd) {
			return this.lastCmd.undo();
		}
		return "";
	}
}

export {
	Car,
	CarMoveCommand,
	CarStopCommand,
	CarTurnRightCommand,
	CarTurnLeftCommand,
	CarControl
} 