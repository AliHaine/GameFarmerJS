import Element from "./../element.js"
import ActionDefault from "./../element_actions/action_default.js";
import {addImgToSquare} from "../../view/render.js";

export default class ElementDefault extends Element {
	constructor(image, elementAction =  new ActionDefault(), resource, resourceNumber = 1) {
		super(image, elementAction);
		this.setLootable(resource, resourceNumber)
	}

	setElementToSquare(square) {
		if (!this.setElementConditions(square))
			return;
		addImgToSquare(square, this.getImage());
	}
}