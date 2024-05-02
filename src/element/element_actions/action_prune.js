class ActionPrune extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const block = getBlockFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		block.getResource().addResourceToBar(block.getResourceNumber());
		displayRightClick("+" + block.getResourceNumber(), block.getResource().icon, player.getMouseX() + 40, player.getMouseY());
		square.removeChild(square.querySelectorAll('img')[1]);
		square.appendChild(block.getBlockChild().getFirstImage().cloneNode(true));
	}
}