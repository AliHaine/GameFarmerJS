import Menu from "../menu.js";
import Element from "../../element/element.js";
import Resource from "../../game/resource.js";
import Player from "../../game/player.js";

export default class MenuShop extends Menu {
    async init() {
        await super.init();
        const div = document.createElement("div");
        div.classList.add("shopItem");

        const button = document.createElement("button");
        button.classList.add("menuItem");
        button.classList.add("button");
        button.classList.add("buttonMore");
        button.textContent = "More";

        div.append(button);

        Element.elements.filter((element) => element.haveEconomy()).forEach((element) => {
            const newDiv = div.cloneNode(true);
            newDiv.prepend(element.getImage().cloneNode(true));
            this.menuHtmlContent.getElementsByClassName("shopItems")[0].appendChild(newDiv);
        });

        Resource.resources.forEach((resource) => {
            if (resource.haveEconomy()) {
                div.prepend(resource.getImage().cloneNode(true));
                this.menuHtmlContent.getElementsByClassName("shopItems")[0].appendChild(div);
            }
        });
    }

    build() {
        this.menuHtmlContent.querySelector("#playerMoney").textContent = Player.player.getMoney();
        return this;
    }
}