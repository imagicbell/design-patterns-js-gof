/**
 * The bridge pattern decouples an abstraction from its implementation so that the two can vary independently.
 * It seperates the abstraction and the implementation into two class hierachies and makes a bridge between them using composition.
 * It provides a way to decouple and conform to the "Single Responsibility Principle"
 */

class Message {
	constructor(sender) {
		this.sender = sender;
	}
}

class TextMessage extends Message {
	sendMessage() {
		return `TextMessage send ${this.sender.send()}`;
	}
}

class EmailMessage extends Message {	
	sendMessage() {
		return `EmailMessage send ${this.sender.send()}`;
	}
}

class MessageSender {
	send() {
		return this.type;
	}
}

class TextMessageSender extends MessageSender {
	constructor() {
		super();
		this.type = "text";
	}
}

class EmailMessageSender extends MessageSender {
	constructor() {
		super();
		this.type = "email";
	}
}

export {
	TextMessage,
	EmailMessage,
	TextMessageSender,
	EmailMessageSender
}