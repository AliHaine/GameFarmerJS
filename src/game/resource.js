import {addChildToResourceBar} from "../view/bar.js";


export default class Resource {
	static resources = new Map();

	constructor(displayName, icon) {
		this.displayName = displayName;
		this.icon = icon;

		const li = document.createElement("li")
		li.appendChild(this.getIcon().cloneNode(true));

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

	getResourceFromId(id) {}

	getResourceId() {
		return this.icon.id;
	}

	getIcon() {
		return this.icon;
	}

	static getResource(resourceName) {
		return Resource.resources.get(resourceName);
	}
}