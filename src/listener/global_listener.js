function mouseDownToolBar(event) {
	let block = getBlockFromId(event.target.parentElement.querySelector("img").id)
	if (block === null)
		return;
	handBlock = block;
	console.log(handBlock.icon.src)
	document.body.style.cursor = "url(" + handBlock.icon.src + "), auto";
}