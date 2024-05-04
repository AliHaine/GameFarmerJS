class ActionHarvest extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const block = getElementFromId(img.getAttribute("id"))
		if (!block.isGrown(getImageNumber(img.getAttribute("src"))))
			return;
		block.getResource().addResourceToBar(block.getResourceNumber());
		displayRightClick("+" + block.getResourceNumber(), block.getResource().icon, player.getMouseX() + 40, player.getMouseY());
		square.removeChild(square.querySelectorAll('img')[1]);
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS.cloneNode(true));
	}
}