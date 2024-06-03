import ElementAction from "../element_action.js";
import Element from "../element.js";
import {replaceGroundImg} from "../../view/render.js";

export default class ActionPlowe extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		replaceGroundImg(square, Element.getElementFromId("ground_farm").getImage());
	}
}