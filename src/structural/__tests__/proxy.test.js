import {Access, accessProxy} from '../proxy'

describe("Proxy", () => {
	test("should trap the call to the original target.", () => {
		const access = new Access();

		expect(access.authority).toBe("all")
		expect(accessProxy.authority).toBe("admin");

		expect(access.getAccess("visitor")).toBe(true);
		expect(accessProxy.getAccess("visitor")).toBe(false);
		expect(access.getAccess("admin")).toBe(true);
	})
})