class Resource {
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

	/**
	 * Add a certain number to a resource in the displayed resource navbar.
	 *
	 * This function is used to update the quantity of a resource displayed
	 * in the navigation bar of the user interface
	 *
	 * @param {int} number - The number to add
	 */
	addResourceToBar(number) {
		const img = resourceBarElement.querySelector(`li img[id="${this.icon.id}"]`);
		const span = img.parentElement.querySelector('span');
		span.textContent = (parseInt(span.textContent) + number).toString()
	}
}