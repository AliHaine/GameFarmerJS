class ElementStatic extends BlockElement {
	constructor(images, blockAction = new BlockActionDefault()) {
		super(images, blockAction);
	}

	setElementToSquare(square) {
		square.appendChild(this.images[0].cloneNode(true));
	}
}