import Map from "../game/map.js";
import Player from "../game/player.js";
import Element from "../element/element.js";
import {displayMessageToAlertBox, setCustomCursor} from "../view/render.js";
import Menu from "../view/menu.js";
import {infiniteResources} from "./game_settings.js";

export function mouseDownToolBar(event) {
	const target = event.target.closest('div');
	const element = Element.getElementFromId(target.getElementsByTagName("img")[0].id);
	if (element === null)
		return;
	if (!infiniteResources) {
		const quantity = target.getElementsByClassName("txtNumber")[0].textContent;
		if (quantity <= 0)
			return displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_RESOURCE);
		Player.player.setHandElementQuantity(quantity)
	}
	Player.player.setHandElement(element)
	setCustomCursor(Player.player.getHandElement().getElementImageSrc());
}

export function mouseDown(event) {
	if (Menu.haveMenuActive())
			return;
	const square = Map.mapInstance.tryToGetSquareFromGround(event.target)
	if (square === null)
		return;

	if (event.button === 0 && Player.player.getHandElement() != null)
		Player.player.getHandElement().setElementToSquare(square);
	else if (event.button === 2) {
		Player.player.removeHandElement();
		const element = Map.mapInstance.getElementFromSquare(square);
		if (element.getElementAction() === undefined)
			return;
		element.getElementAction().executor(square)
	}
}

export function mouseMove(event) {
	Player.player.setMouseXY(event.clientX, event.clientY);
}