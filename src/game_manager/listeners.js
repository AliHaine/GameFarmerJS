import Map from "../game/map.js";
import Player from "../game/player.js";

export function mouseDownToolBar(event) {
	const target = event.target.closest('div');
	const element = Element.getElementFromId(target.getElementsByTagName("img")[0].id);
	if (element === null)
		return;
	const quantity = target.getElementsByClassName("txtNumber")[0].textContent;
	if (quantity <= 0 && !Player.player.getInfiniteResources())
		return displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_RESOURCE);
	Player.player.setHandElement(element)
	Player.player.setHandElementQuantity(quantity)
	document.body.style.cursor = "url(" + Player.player.getHandElement().getElementImageSrc() + "), auto";
}

export function mouseDown(event) {
	if (Player.player.isUnderMenu())
			return;
	const square = Map.map.tryToGetSquareFromGround(event.target)
	if (square === null)
		return;

	if (event.button === 0 && Player.player.getHandElement() != null)
		Player.player.getHandElement().setElementToSquare(square);
	else if (event.button === 2) {
		const element = Map.map.getElementFromSquare(square);
		if (element.getElementAction() === undefined)
			return;
		element.getElementAction().executor(square)
	}
}

export function mouseMove(event) {
	Player.player.setMouseXY(event.clientX, event.clientY);
}