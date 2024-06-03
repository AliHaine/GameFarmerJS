import {resourceBarElement} from "../game_manager/game_assets.js";

export default class Resource {
	static resources = new Map();

	constructor(displayName, icon) {
		this.displayName = displayName;
		this.icon = icon;

		const li = document.createElement("li")
		li.appendChild(this.icon.cloneNode(true));

		let spanHTML = `<span class="txt">0</span>`;

		li.insertAdjacentHTML('beforeend', spanHTML);
		resourceBarElement.appendChild(li)
	}

	getResourceFromId(id) {}

	static getResource(resourceName) {
		return Resource.resources.get(resourceName);
	}
}