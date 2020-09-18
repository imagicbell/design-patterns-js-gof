/**
 * The visitor pattern separates an algorithm from an object structure by moving the hierarchy of methods into another object.
 * It enables to define a new operation without changing the classes of elements on which it operates.
 */

class Employee {
	constructor(salary) {
		this.salary = salary;
	}

	accept(visitor) {
		return visitor.visit(this);
	}
}

class Manager extends Employee {
	constructor(salary) {
		super(salary);
	}
}

class Developer extends Employee {
	constructor(salary) {
		super(salary);
	}
}

class BonusVisitor {
	visit(employee) {
		if (employee instanceof Manager) {
			return employee.salary * 0.2;
		} else if (employee instanceof Developer) {
			return employee.salary * 0.1;
		}
		return 0;
	}
}

class PensionVisitor {
	visit(employee) {
		if (employee instanceof Manager) {
			return employee.salary * 0.5;
		} else if (employee instanceof Developer) {
			return employee.salary * 0.3;
		}
		return 0;
	}
}

export {
	Manager,
	Developer,
	BonusVisitor,
	PensionVisitor
}
