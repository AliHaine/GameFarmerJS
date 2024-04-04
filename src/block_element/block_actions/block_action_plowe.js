class BlockActionPlowe extends BlockAction {
	constructor() {
		super();
	}

	executor(square) {
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS_FARM.cloneNode(true));
	}
}