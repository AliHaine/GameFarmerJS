import ElementAction from "../element_action.js";

export default class ActionPlowe extends ElementAction {
	constructor() {
		super();
	}

	executor(square) {
		square.removeChild(square.querySelector('.ground'));
		square.appendChild(IMG.GRASS_FARM.cloneNode(true));
	}
}