class ActionHarvest extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const element = getElementFromId(img.getAttribute("id"))
		if (!element.isGrown(getImageNumber(img.getAttribute("src"))))
			return;
		element.getResource().addResourceToBar(element.getResourceNumber());
		displayRightClick("+" + element.getResourceNumber(), element.getResource().icon, player.getMouseX() + 40, player.getMouseY());
		square.removeChild(square.querySelectorAll('img')[1]);
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS.cloneNode(true));
	}
}