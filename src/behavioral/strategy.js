/**
 * The strategy pattern defines a family of algorithms, encapsulate each one, and make them interchangable dynamically.
 * It makes the algorithm vary independently from clients that use it.
 */

class Encryptor {
	constructor(strategy) {
		this.strategy = strategy;
	}

	changeStrategy(strategy) {
		this.strategy = strategy;
	}

	encrypt(text) {
		return this.strategy.encrypt(text);
	}
} 

class AStrategy {
	encrypt(text) {
		let newText = '';
		for (let c of text) {
			if (c >= 'a' && c <= 'z') {
				newText += String.fromCharCode(c.charCodeAt(0) - 32);
			} else if (c >= 'A' && c <= 'Z') {
				newText += String.fromCharCode(c.charCodeAt(0) + 32);
			} else {
				newText += c;
			}
		}
		return newText;
	}
}

class BStrategy {
	encrypt(text) {
		return text.toUpperCase();
	}
}

class CStrategy {
	encrypt(text) {
		return text.toLowerCase();
	}
}

export {
	Encryptor,
	AStrategy,
	BStrategy,
	CStrategy
}