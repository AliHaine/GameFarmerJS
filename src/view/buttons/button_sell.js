import Button from "../button.js";
import Player from "../../game/player.js";
import {displayMessageToAlertBox} from "../render.js";
import Menu from "../menu.js";
import Element from "../../element/element.js";
import Resource from "../../game/resource.js";

export default class ButtonSell extends Button {
    constructor() {
        super("buttonSell");
    }

    executor(eventTarget) {
        const parentElement = eventTarget.parentElement;

        let sellElement = Element.getElementFromId(parentElement.parentElement.querySelector("#imgElement img").id);
        if (!sellElement)
            sellElement = Resource.getResource(parentElement.parentElement.querySelector("#imgElement img").id);
        const sellQuantity = parseInt(parentElement.querySelector("#sellQuantity").value);
        if (sellElement.getQuantity() < sellQuantity) {
            displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_RESOURCE);
            return;
        }

        const sellPrice = parentElement.querySelector("#sellPrice").value * sellQuantity;
        const player = Player.player;

        player.addMoney(sellPrice);
        sellElement.updateQuantity(-sellQuantity);
        Menu.getMenu("menu-shop.html").build().displayMenu();
    }
}