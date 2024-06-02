import ElementAction from "../element_action.js";
import Player from "../../game/player.js";
import Element from "../element.js";

export default class ActionHarvest extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const element = Element.getElementFromId(img.getAttribute("id"))
		if (!element.isGrown(getImageNumber(img.getAttribute("src"))))
			return displayMessageToAlertBox(ENG_LANG.WAIT_CROP_GROW);
		addResourceToBar(element.getResource(), element.getResourceNumber());
		displayRightClick("+" + element.getResourceNumber(), element.getResource().icon, Player.player.getMouseX() + 40, Player.player.getMouseY());
		square.removeChild(square.querySelectorAll('img')[1]);
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS.cloneNode(true));
	}
}