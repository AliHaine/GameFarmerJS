function mouseDownToolBar(event) {
	let block = getBlockFromId(event.target.textContent)
	if (block === null)
		return;
	handBlock = block;
}