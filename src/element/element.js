class Element {
    constructor(image, elementAction) {
        if (this.constructor === Element)
            throw new Error("Abstract classes can't be instantiated.");
        this.image = image;
        this.elementAction = elementAction;
    }

    setNaturalSpawnChance(naturalSpawnChance) {
        this.naturalSpawnChance = naturalSpawnChance;
        return this;
    }

    setLootable(resource, resourceNumber = 1) {
        this.resource = resource;
        this.resourceNumber = resourceNumber;
        return this;
    }

    setDisplayName(displayName) {
        this.displayName = displayName;
        return this;
    }

    setElementToSquare(square) {
        throw new Error("This function need to be implemented");
    }

    setElementConditions(square) {
        return !(map.isSquareContainMaxElement(square) || (!infiniteResources && player.getHandElementQuantity() <= 0));
    }

    setHtmlDisplayCategory(htmlDisplayCategory) {
        this.htmlDisplayCategory = htmlDisplayCategory;
        let div = document.createElement('div');
		div.appendChild(this.image);

		let spanName = `<span class="txt">${this.displayName}</span>`;
        let spanNumber = `<span class="txtNumber">0</span>`;

		div.insertAdjacentHTML('beforeend', spanName);
        div.insertAdjacentHTML('beforeend', spanNumber);
		this.htmlDisplayCategory.appendChild(div);
        return this;
    }

    setBlockChild(blockChild) {
        this.blockChild = blockChild;
        return this;
    }

    getResource() {
        return this.resource;
    }

    getResourceNumber() {
        return this.resourceNumber;
    }

    getBlockChild() {
        return this.blockChild;
    }

    getImage() {
        return this.image;
    }

    getElementAction() {
        return this.elementAction;
    }

    getElementId() {
        return this.image.getAttribute("id");
    }

    getElementImageSrc() {
        return this.image.getAttribute("src");
    }
}