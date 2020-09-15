/**
 * The chain of responsibility pattern delegates commands to a chain of processing objects. 
 * To illustrate, the request is passed through a chain of receiving objects which will ignore or process it.
 * A best practice is the event propagation. Once an event is triggered, it is forwarded to a path of listeners. The path is prefined by the registration order, the DOM hierarchy, etc.
 */

class BugRequest {
	constructor(bugId) {
		this.bugId = bugId;
		this.state = "open";
	}
}

class PMSolver {
	constructor() {
		this.name = "pm";
	}

	solve(bug) {
		bug.state = "pending";
	}
}

class FrontEndSolver {
	constructor() {
		this.name = "frontend";
	}

	solve(bug) {
		bug.state = bug.bugId < 50 ? "solved" : "pending";
	}
}

class BackEndSolver {
	constructor() {
		this.name = "backend";
	}

	solve(bug) {
		bug.state = bug.bugId >= 50 ? "solved" : "pending";
	}
}

class BugService {
	constructor() {
		this.solvers = [];
		this.solvers.push(new PMSolver());
		this.solvers.push(new FrontEndSolver());
		this.solvers.push(new BackEndSolver());
	}

	solveBug(bugId) {
		const bugRequest = new BugRequest(bugId);
		for (const solver of this.solvers) {
			solver.solve(bugRequest);
			if (bugRequest.state === "solved")
				return solver.name;
		}
		return "not solved";
	}
}

export default BugService;