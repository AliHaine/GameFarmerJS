import Element from './../element.js';

class ElementGround extends Element {
	constructor(image, blockAction = new ActionDefault()) {
		super(image, blockAction);
	}
}

export default ElementGround;