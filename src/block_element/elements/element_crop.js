class ElementCrop extends BlockElement {
	constructor(images, displayName, timeToGrowth) {
		super(images, new BlockActionHarvest());
		this.timeToGrowth = timeToGrowth;
		this.icon = images[images.length - 1];
		this.displayName = displayName;
		this.setHtmlDisplayCategory(TOOLBAR_CATEGORY.CROP)
	}

	setElementToSquare(square) {
		if (map.isSquareContainMaxElement(square) || !square.querySelector('img#ground_farm'))
			return;
		square.appendChild(this.images[0].cloneNode(true));
		for (let i= 1; i <= this.images.length - 1; i++) {
			setTimeout(() => {
				square.removeChild(square.querySelectorAll('img')[1]);
				square.appendChild(this.images[i].cloneNode(true));
			}, this.#cropGrowthCalculation(i));
		}
	}

	#cropGrowthCalculation(stage) {
		return (this.timeToGrowth * stage + (Math.random() * this.timeToGrowth)) * globalGrowthSpeed;
	}
}