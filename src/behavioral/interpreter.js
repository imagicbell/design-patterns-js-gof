/**
 * The interpreter pattern interprets the user input expressions so that the application can understand and process. 
 * A typical usage is to interpret the mathematical expressions that follows a specific pattern.
 */

class Number {
	constructor(value) {
		this.value = value;
	}

	interpret() {
		return this.value;
	}
}

class Operator {
	constructor(value) {
		this.value = value;
	}

	interpret() {
		return this.value;
	}
}

class UnaryOperation {
	constructor(operand, operator) {
		this.operand = operand;
		this.operator = operator;
	}

	interpret() {
		switch(this.operator.interpret()) {
			case '-':
				return -this.operand.interpret();
			case '!':
				return !this.operand.interpret();
			case '~':
				return ~this.operand.interpret();
			default:
				throw "invalid operator!"
		}
	}
}

class BinaryOperation {
	constructor(left, right, operator) {
		this.left = left;
		this.right = right;
		this.operator = operator;
	}

	interpret() {
		switch(this.operator.interpret()) {
			case '+':
				return this.left.interpret() + this.right.interpret();
			case '-':
				return this.left.interpret() - this.right.interpret();
			case '*':
				return this.left.interpret() * this.right.interpret();
			case '/':
				return this.left.interpret() / this.right.interpret();
			default:
				throw "invalid operator!"
		}
	}
}

export {
	Number,
	Operator,
	UnaryOperation,
	BinaryOperation
}