import { BulletFactory } from '../flyweight';

describe("Flyweight", () => {
	test("should reuse flyweight object", () => {
		const factory = new BulletFactory();
		const bullet1 = factory.createBullet("A1");
		const bullet2 = factory.createBullet("A1");
		const bullet3 = factory.createBullet("B1");
		const bullet4 = factory.createBullet("B1");

		expect(factory.getBulletCount()).toBe(2);
		expect(bullet1).toEqual(bullet2);
		expect(bullet3).toEqual(bullet4);

		bullet1.updateSpeed(20);
		expect(bullet2.speed).toBe(20);
	})
})