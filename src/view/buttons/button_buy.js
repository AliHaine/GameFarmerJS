import Button from "../button.js";
import Player from "../../game/player.js";
import Menu from "../menu.js";
import {displayMessageToAlertBox} from "../render.js";
import Element from "../../element/element.js";

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

        const buyElement = Element.getElementFromId(parentElement.parentElement.querySelector("#imgElement img").id);
        const elementQuantity = parseInt(buyElement.elementHtmlDiv.querySelector(".txtNumber").textContent)
        buyElement.elementHtmlDiv.querySelector(".txtNumber").textContent = elementQuantity + 1;
    }
}