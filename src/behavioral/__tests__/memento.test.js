import {
	PlayerState,
	Memento,
	Caretaker,
} from '../memento'

describe("Memento", () => {
	test("should record the internal state of originator object.", () => {
		const caretaker = new Caretaker();
		const playerState = new PlayerState();

		caretaker.addMemento(playerState.saveToMemento());

		playerState.hp += 100;
		caretaker.addMemento(playerState.saveToMemento());

		playerState.hp = 0;
		playerState.mp = 0;
		playerState.moveSpeed = 0;
		playerState.weapon = "";
	
		playerState.undoFromMemento(caretaker.getMemento());
		expect(playerState.hp).toBe(200);
		expect(playerState.mp).toBe(50);
		expect(playerState.moveSpeed).toBe(10);
		expect(playerState.weapon).toBe("knife");

		playerState.undoFromMemento(caretaker.getMemento());
		expect(playerState.hp).toBe(100);
		expect(playerState.mp).toBe(50);
		expect(playerState.moveSpeed).toBe(10);
		expect(playerState.weapon).toBe("knife");
	})
})

