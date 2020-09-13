/**
 * Adapter pattern is used to convert the interface of a class into another interface clients expect. 
 * Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.
 * It can be applied to the senario when introduce a new feature into the existing system but the method of the new class can not be called directly by the system.
 */

class TextFormatter {
	formatText(text) {
		return text.replace(/\./g, '\n');
	}
}

class CsvFormatter {
	formatCsvText(text) {
		return text.replace(/\./g, ',');
	}
}

class CsvFormatterAdapter {
	constructor(csvFormatter) {
		this.csvFormatter = csvFormatter;
	}

	formatText(text) {
		return this.csvFormatter.formatCsvText(text);
	}
}

export { 
	TextFormatter,
	CsvFormatter,
	CsvFormatterAdapter
}

