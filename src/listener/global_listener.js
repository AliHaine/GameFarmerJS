function mouseDownToolBar(event) {
	let block = getBlockFromId(event.target.parentElement.querySelector("img").id)
	if (block === null)
		return;
	handBlock = block;
}