class ElementDefault extends Element {
	constructor(images, blockAction = new ActionDefault(), resource, resourceNumber = 1) {
		super(images, blockAction);
		this.setLootable(resource, resourceNumber)
		this.setIcon(images[0]);
	}

	setElementToSquare(square) {
		if (map.isSquareContainMaxElement(square))
			return;
		square.appendChild(this.images[0].cloneNode(true));
	}
}