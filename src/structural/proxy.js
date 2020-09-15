/**
 * The proxy pattern creates a placeholder interface to an underlying object to control access to it.
 * The proxy object has the same interface with the target object. So it "traps" the call to the real funtions of the target object.
 * Javascript has a built-in "Proxy". It behaves as a trap to the target object and can add customized behaivors.
 */

class Access {
	constructor() {
		this.state = "closed";
		this.authority = "all";
	}

	getAccess(userId) {
		return true;
	}
}

const handler = {
	get: function(target, prop, receiver) {
		if (prop === "authority")
			return "admin";
		if (prop === "getAccess")
			return function(userId) {
				return userId === "admin" ? Reflect.apply(target, thisArg, userId) : false;
			}
		return Reflect.get(...arguments);
	}
}

const accessProxy = new Proxy(new Access(), handler);

export { Access, accessProxy };