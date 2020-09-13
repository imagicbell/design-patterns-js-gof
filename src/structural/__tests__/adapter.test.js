import { TextFormatter, CsvFormatter, CsvFormatterAdapter } from '../adapter';

describe("Adapter", () => {
	test("should adapte the interface of CsvFormatter to TextFormatter.", () => {
		const textFormatter = new TextFormatter();
		expect(textFormatter.formatText("A.B.C")).toBe("A\nB\nC");

		const csvFormatterAdapter = new CsvFormatterAdapter(new CsvFormatter());
		expect(csvFormatterAdapter.formatText("A.B.C")).toBe("A,B,C");
	})
})