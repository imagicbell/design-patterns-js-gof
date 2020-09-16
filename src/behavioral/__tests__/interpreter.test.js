import {
	Number,
	Operator,
	UnaryOperation,
	BinaryOperation
} from '../interpreter'

describe("Interpreter", () => {
	test("should interpret unary operations", () => {
		let unaryOp = new UnaryOperation(new Number(5), new Operator('-'));
		expect(unaryOp.interpret()).toBe(-5);

		unaryOp = new UnaryOperation(new Number(5), new Operator('!'));
		expect(unaryOp.interpret()).toBe(false);

		unaryOp = new UnaryOperation(new Number(5), new Operator('~'));
		expect(unaryOp.interpret()).toBe(-6);
	});
	test("should interpret binary operations", () => {
		let binaryOp = new BinaryOperation(new Number(10), new Number(5), new Operator('+'));
		expect(binaryOp.interpret()).toBe(15);

		binaryOp = new BinaryOperation(new Number(10), new Number(5), new Operator('-'));
		expect(binaryOp.interpret()).toBe(5);

		binaryOp = new BinaryOperation(new Number(10), new Number(5), new Operator('*'));
		expect(binaryOp.interpret()).toBe(50);

		binaryOp = new BinaryOperation(new Number(10), new Number(5), new Operator('/'));
		expect(binaryOp.interpret()).toBe(2);
	})
})