import ElementAction from "../element_action.js";
import Player from "../../game/player.js";
import Element from "../element.js";
import {displayRightClick, replaceElementImg} from "../../view/render.js";
import {updateResourceBarNumber} from "../../view/bar.js";

export default class ActionPrune extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		updateResourceBarNumber(element.getResource(), element.getResourceNumber());
		displayRightClick("+" + element.getResourceNumber(), element.getResource().getIcon(), Player.player.getMouseX() + 40, Player.player.getMouseY());
		replaceElementImg(square, element.getBlockChild().getImage());
	}
}