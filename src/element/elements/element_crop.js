class ElementCrop extends Element {
	constructor(image, displayName, timeToGrow, resource, resourceNumber = 1) {
		super(image, new ActionHarvest());
		this.timeToGrowth = timeToGrow;
		this.setLootable(resource, resourceNumber)
		this.stageImages = this.setImagesStage();
		this.setDisplayName(displayName)
		this.setHtmlDisplayCategory(TOOLBAR_CATEGORY.CROP)
	}

	setElementToSquare(square) {
		if (!this.setElementConditions(square) || !square.querySelector('img#ground_farm'))
			return;
		square.appendChild(this.stageImages[0].cloneNode(true));
		for (let i= 1; i <= this.stageImages.length - 1; i++) {
			setTimeout(() => {
				square.removeChild(square.querySelectorAll('img')[1]);
				square.appendChild(this.stageImages[i].cloneNode(true));
			}, this.#cropGrowthCalculation(i));
		}
	}

	#cropGrowthCalculation(stage) {
		return (this.timeToGrowth * stage + (Math.random() * this.timeToGrowth)) * Element.timeToGrow;
	}

	isGrown(number) {
		return number === this.stageImages.length - 1;
	}

	setImagesStage() {
		const number = getImageNumber(this.image.getAttribute("src"));
		const path = this.getElementImageSrc().replace(/[0-9]/, "");
		let stageImageTmp = newImages(path, this.getElementId(), number);
		stageImageTmp.push(this.image);
		return stageImageTmp;
	}
}