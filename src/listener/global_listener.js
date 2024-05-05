function mouseDownToolBar(event) {
	const target = event.target.closest('div');
	const element = getElementFromId(target.getElementsByTagName("img")[0].id);
	if (element === null)
		return;
	player.setHandElement(element)
	document.body.style.cursor = "url(" + player.getHandElement().getElementImageSrc() + "), auto";
}

function mouseDownMap(event) {
	const [x, y] = map.getMapMouseXY();
	if (map.isBorderOfMap(y, x))
		return;

	const square = map.getSquare(x, y);
	if (event.button === 0 && player.getHandElement() != null)
		player.getHandElement().setElementToSquare(square);
	else if (event.button === 2) {
		const element = map.getElementFromSquare(square);
		if (element.getElementAction() === undefined)
			return;
		element.getElementAction().executor(square)
	}
}

function mouseDownToolBarButton(event) {
	const target = event.target.closest('.left-item');

	MENU.SETTINGS.style.display = MENU.SETTINGS.style.display === "none" ? "flex" : "none";
}
