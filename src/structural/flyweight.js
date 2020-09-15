/**
 * The flyweight pattern uses sharing to reduce memory consumption when dealing with large numbers of objects.
 * The shared object is called flyweight. It stores the immutable information that is shared by relative objects, and has methods that can receive and act on extrinsic state.
 * When creating a new object, it returns the existing similar flyweight object or creates a new flyweight.
 */

class Bullet {
	constructor(name) {
		this.name = name;
		this.shape = "sphere";
		this.speed = 10;
	}

	updateSpeed(speed) {
		this.speed = speed;
	}
}

class BulletFactory {
	constructor() {
		this.bullets = {};
		this.bulletCount = 0;
	}

	createBullet(bulletName) {
		if (!this.bullets[bulletName]) {
			this.bullets[bulletName] = new Bullet(bulletName);
			this.bulletCount++;
		}

		return this.bullets[bulletName];
	}

	getBulletCount() {
		return this.bulletCount;
	}
}

export {
	Bullet,
	BulletFactory,
}