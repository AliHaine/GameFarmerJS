import ElementAction from "../element_action.js";
import Player from "../../game/player.js";
import Element from "../element.js";
import {addResourceToBar, displayRightClick, replaceElementImg} from "../../view/render.js";

export default class ActionPrune extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		addResourceToBar(element.getResource(), element.getResourceNumber());
		displayRightClick("+" + element.getResourceNumber(), element.getResource().getIcon(), Player.player.getMouseX() + 40, Player.player.getMouseY());
		replaceElementImg(square, element.getBlockChild().getImage());
	}
}