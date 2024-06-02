import ElementAction from "../element_action.js";

export default class ActionUnplowe extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS.cloneNode(true));
	}
}