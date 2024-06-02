export default class ElementAction {
	constructor() {
		if (this.constructor === ElementAction)
			throw new Error("Abstract classes can't be instantiated.");
	}

	executor(square) {
		throw new Error("This function need to be implemented");
	}
}