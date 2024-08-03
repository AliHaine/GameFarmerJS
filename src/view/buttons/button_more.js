import Button from "../button.js";
import Menu from "../menu.js";
import Element from "../../element/element.js";
import Resource from "../../game/resource.js";

export default class ButtonMore extends Button {
    constructor() {
        super("buttonMore");
    }

    executor(eventTarget) {
        let element = Element.getElementFromId(eventTarget.parentElement.querySelector("img").id);
        if (!element)
            element = Resource.getResource(eventTarget.parentElement.querySelector("img").id);
        Menu.getMenu("menu-shop-more.html").build(element).displayMenu();
    }
}