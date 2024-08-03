import {addChildToResourceBar, updateResourceBarNumber} from "../view/bar.js";


export default class Resource {
	static resources = new Map();

	constructor(displayName, image) {
		this.displayName = displayName;
		this.image = image;
		this.quantity = 0;

		const li = document.createElement("li")
		li.appendChild(this.getImage().cloneNode(true));

		let spanHTML = `<span class="txt">0</span>`;

		li.insertAdjacentHTML('beforeend', spanHTML);
		addChildToResourceBar(li);

		Resource.resources.set(this.getResourceId(), this);
	}


	setPrice(sellPrice, buyPrice) {
		this.sellPrice = sellPrice;
		this.buyPrice = buyPrice;
		return this;
	}

	getSellPrice() {
		return this.sellPrice;
	}

	getBuyPrice() {
		return this.buyPrice;
	}

	haveEconomy() {
		return this.getBuyPrice() || this.getSellPrice();
	}

	getQuantity() {
		return this.quantity;
	}

	updateQuantity(quantityValue) {
		this.quantity += quantityValue;
		updateResourceBarNumber(this, this.quantity)
	}

	getResourceFromId(id) {}

	getResourceId() {
		return this.image.id;
	}

	getImage() {
		return this.image;
	}

	static getResource(resourceId) {
		return Resource.resources.get(resourceId);
	}
}