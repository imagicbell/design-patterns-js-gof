import  {
	Encryptor,
	AStrategy,
	BStrategy,
	CStrategy
} from '../strategy';


describe("Strategy", () => {
	test("should decouple the client from its algorithms and allow the client to change its algorithm dynamically.", () => {
		const encryptor = new Encryptor(new AStrategy());
		expect(encryptor.encrypt('AbCd123')).toBe('aBcD123');

		encryptor.changeStrategy(new BStrategy());
		expect(encryptor.encrypt('AbCd123')).toBe('ABCD123');

		encryptor.changeStrategy(new CStrategy());
		expect(encryptor.encrypt('AbCd123')).toBe('abcd123');
	})
})