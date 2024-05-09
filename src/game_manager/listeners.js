function mouseDownToolBar(event) {
	const target = event.target.closest('div');
	const element = Element.getElementFromId(target.getElementsByTagName("img")[0].id);
	if (element === null)
		return;
	const quantity = target.getElementsByClassName("txtNumber")[0].textContent;
	if (quantity <= 0 && !infiniteResources)
		return displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_RESOURCE);
	player.setHandElement(element)
	player.setHandElementQuantity(quantity)
	document.body.style.cursor = "url(" + player.getHandElement().getElementImageSrc() + "), auto";
}

function mouseDown(event) {
	const button = Button.tryToGetButtonFromName(event.target.textContent)
	if (button !== null)
		return button.executor();
	if (player.isUnderMenu())
			return;
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

function mouseMove(event) {
	player.setMouseXY(event.clientX, event.clientY);
	if (player.isUnderMenu())
		return;
	const [x, y] = map.getMapMouseXY();
	const square = map.getSquare(x, y);
	if (map.isBorderOfMap(y, x)) {
		if (map.hoveredSquare != null)
			map.hoveredSquare.querySelector("img.ground").classList.remove("square-hover-effect");
		map.hoveredSquare = null
		return;
	}
	if (map.hoveredSquare === square)
		return;
	if (map.hoveredSquare != null)
		map.hoveredSquare.querySelector("img.ground").classList.remove("square-hover-effect");
	square.querySelector("img.ground").classList.add("square-hover-effect");
	map.hoveredSquare = square;
}
