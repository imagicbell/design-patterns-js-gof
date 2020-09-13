import {
	TextMessage,
	EmailMessage,
	TextMessageSender,
	EmailMessageSender
} from '../bridge';

describe("Bridge", () => {
	test("should decouple abstraction using composition", () => {
		const textMsg = new TextMessage(new TextMessageSender());
		expect(textMsg.sendMessage()).toBe("TextMessage send text");
		const emailMsg = new EmailMessage(new EmailMessageSender());
		expect(emailMsg.sendMessage()).toBe("EmailMessage send email");
	})
})