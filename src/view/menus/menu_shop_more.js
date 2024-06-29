import Menu from "../menu.js";
import Player from "../../game/player.js";

export default class MenuShopMore extends Menu {

    build(element) {
        this.menuHtmlContent.querySelector("#shopMore img").replaceWith(element.getImage().cloneNode(true));
        this.menuHtmlContent.querySelector("#buyPrice").value = element.getBuyPrice();
        this.menuHtmlContent.querySelector("#sellPrice").value = element.getSellPrice();
        this.menuHtmlContent.querySelector("#buyPrice").alt = element.getBuyPrice();
        this.menuHtmlContent.querySelector("#sellPrice").alt = element.getSellPrice();
        this.menuHtmlContent.querySelector("#buyQuantity").value = 1;
        this.menuHtmlContent.querySelector("#sellQuantity").value = 1;
        this.menuHtmlContent.querySelector("#playerMoney").textContent = Player.player.getMoney();
        return this;
    }
}