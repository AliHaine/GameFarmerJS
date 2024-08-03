import ElementAction from "../element_action.js";
import Player from "../../game/player.js";
import Element from "../element.js";
import {getImageNumber} from "../../utils.js";
import {
	displayMessageToAlertBox,
	displayRightClick,
	removeElementImg,
	replaceGroundImg
} from "../../view/render.js";

export default class ActionHarvest extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const element = Element.getElementFromId(img.getAttribute("id"));
		if (!element.isGrown(getImageNumber(img.getAttribute("src"))))
			return displayMessageToAlertBox(ENG_LANG.WAIT_CROP_GROW);
		element.getResource().updateQuantity(element.getResourceNumber())
		displayRightClick("+" + element.getResourceNumber(), element.getResource().getImage(), Player.player.getMouseX() + 40, Player.player.getMouseY());
		removeElementImg(square);
		replaceGroundImg(square, Element.getElementFromId("ground").getImage());
	}
}