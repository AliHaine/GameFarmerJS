class ActionDefault extends ElementAction {
	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		if (element.getResource() !== undefined) {
			addResourceToBar(element.getResource(), element.getResourceNumber());
			displayRightClick("+" + element.getResourceNumber(), element.getResource().icon, player.getMouseX() + 40, player.getMouseY());
		}
		square.removeChild(square.querySelectorAll('img')[1]);
	}
}