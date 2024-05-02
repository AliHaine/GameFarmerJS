class ActionDefault extends ElementAction {
	executor(square) {
		const block = getBlockFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		if (block.getResource() !== undefined) {
			block.getResource().addResourceToBar(block.getResourceNumber());
			displayRightClick("+" + block.getResourceNumber(), block.getResource().icon, player.getMouseX() + 40, player.getMouseY());
		}
		square.removeChild(square.querySelectorAll('img')[1]);
	}
}