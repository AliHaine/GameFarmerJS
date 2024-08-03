import Button from "../button.js";
import Player from "../../game/player.js";
import Menu from "../menu.js";
import {displayMessageToAlertBox} from "../render.js";
import Element from "../../element/element.js";
import {updateResourceBarNumber, updateToolBarQuantity} from "../bar.js";
import Resource from "../../game/resource.js";

export default class ButtonBuy extends Button {
    constructor() {
        super("buttonBuy");
    }

    executor(eventTarget) {
        const parentElement = eventTarget.parentElement;
        const buyPrice = parentElement.querySelector("#buyPrice").value;
        const player = Player.player;
        if (!player.isMoneyEnough(buyPrice)) {
            displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_MONEY);
            return;
        }
        player.removeMoney(buyPrice);
        Menu.getMenu("menu-shop.html").build().displayMenu();
        let buyElement = Element.getElementFromId(parentElement.parentElement.querySelector("#imgElement img").id);
        if (buyElement)
            updateToolBarQuantity(buyElement, 1);
        else {
            buyElement = Resource.getResource(parentElement.parentElement.querySelector("#imgElement img").id);
            updateResourceBarNumber(buyElement, 1)
        }
    }
}