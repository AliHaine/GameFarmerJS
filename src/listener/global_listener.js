function mouseDownToolBar(event) {
	let block;
	if (event.target.tagName.toLowerCase() === "div") {
		block = getBlockFromId(event.target.getElementsByTagName("img")[0].id)
	}
	else
		block = getBlockFromId(event.target.parentElement.getElementsByTagName("img")[0].id)
	if (block === null)
		return;
	handBlock = block;
	document.body.style.cursor = "url(" + handBlock.icon.src + "), auto";
}