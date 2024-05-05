class ElementDefault extends Element {
	constructor(image, blockAction = new ActionDefault(), resource, resourceNumber = 1) {
		super(image, blockAction);
		this.setLootable(resource, resourceNumber)
	}

	setElementToSquare(square) {
		if (map.isSquareContainMaxElement(square))
			return;
		square.appendChild(this.image.cloneNode(true));
	}
}