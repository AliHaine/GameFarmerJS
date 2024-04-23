class BlockAction {
	constructor() {
		if (this.constructor === BlockAction)
			throw new Error("Abstract classes can't be instantiated.");
	}

	executor(square) {
		throw new Error("This function need to be implemented");
	}
}