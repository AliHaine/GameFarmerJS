class Element {
    constructor(images, elementAction) {
        if (this.constructor === Element)
            throw new Error("Abstract classes can't be instantiated.");
        this.images = images;
        this.elementAction = elementAction;
    }

    setIcon(icon) {
        this.icon = icon;
        return this;
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

    setHtmlDisplayCategory(htmlDisplayCategory) {
        this.htmlDisplayCategory = htmlDisplayCategory;
        let div = document.createElement('div');
		div.appendChild(this.icon);

		let spanHTML = `<span class="txt">${this.displayName}</span>`;

		div.insertAdjacentHTML('beforeend', spanHTML);
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

    getFirstImage() {
        return this.images[0];
    }

    getElementAction() {
        return this.elementAction;
    }
}