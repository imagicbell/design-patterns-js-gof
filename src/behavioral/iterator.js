/**
 * The iterator pattern provides a way for aggregate objects to access its elements sequentially without exposing its internal structure.
 * A well-known example is the collections of Array, Map, Set which uses iterator to access and traverse their elements.
 * Javascript has iterators and generators which enable to create iterators and thus make objects iterable easier.
 */

/**
 * es6 iterator
 */
class IterableClass {
	constructor(data) {
		this.data = data;
	}

	[Symbol.iterator]() {
		// Use a new index for each iterator. This makes multiple
    // iterations over the iterable safe for non-trivial cases,
    // such as use of break or nested looping over the same iterable.
		let index = 0;
		return {
			next: () => {
				if (index < this.data.length) {
					return { value: this.data[index++], done: false };
				} else {
					return { done: true };
				}
			}
		}
	}
}

function makeIterator(array) {
	let index = 0;
	return {
		next: () => {
			if (index < array.length) {
				return { value: array[index++], done: false };
			} else {
				return { done: true };
			}
		}
	}
}

function* makeGenerator(array) {
	let index = 0;
	while(index < array.length) {
		yield array[index++];
	}
}

export {
	makeIterator,
	makeGenerator,
	IterableClass
}