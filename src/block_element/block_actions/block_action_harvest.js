class BlockActionHarvest extends BlockAction {
	constructor() {
		super();
	}

	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const block = getBlockFromId(img.getAttribute("id"))
		if (!block.isGrown(getImageNumber(img.getAttribute("src"))))
			return;
		block.getResource().addResourceToBar(block.getResourceNumber());
		square.removeChild(square.querySelectorAll('img')[1]);
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS.cloneNode(true));
	}
}