import Element from './../element.js';
import ActionDefault from "../element_actions/action_default.js";

export default class ElementGround extends Element {
	constructor(image, blockAction = new ActionDefault()) {
		super(image, blockAction);
	}
}