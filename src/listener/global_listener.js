function mouseDownToolBar(event) {
	const target = event.target.closest('div');
	const block = getBlockFromId(target.getElementsByTagName("img")[0].id);
	if (block === null)
		return;
	player.setHandBlock(block)
	document.body.style.cursor = "url(" + player.getHandBlock().icon.src + "), auto";
}

function mouseDownMap(event) {
	const [x, y] = map.getMapMouseXY();
	if (map.isBorderOfMap(y, x))
		return;

	const square = map.getSquare(x, y);
	if (event.button === 0 && player.getHandBlock() != null)
		player.getHandBlock().setElementToSquare(square);
	else if (event.button === 2) {
		const block = map.getBlockFromSquare(square);
		if (block.blockAction === undefined)
			return;
		block.blockAction.executor(square)
	}
}

function mouseDownToolBarButton(event) {
	const target = event.target.closest('.left-item');

	MENU.SETTINGS.style.display = MENU.SETTINGS.style.display === "none" ? "flex" : "none";
}
