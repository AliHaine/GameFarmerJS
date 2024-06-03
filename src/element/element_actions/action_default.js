import ElementAction from "../element_action.js";
import Player from "../../game/player.js";
import Element from "../element.js";
import {addResourceToBar, displayRightClick, removeElementImg} from "../../view/render.js";

export default class ActionDefault extends ElementAction {
	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		if (element.getResource() !== undefined) {
			addResourceToBar(element.getResource(), element.getResourceNumber());
			displayRightClick("+" + element.getResourceNumber(), element.getResource().icon,  Player.player.getMouseX() + 40, Player.player.getMouseY());
		}
		removeElementImg(square);
	}
}