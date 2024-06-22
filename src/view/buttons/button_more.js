import Button from "../button.js";
import Menu from "../menu.js";
import Element from "../../element/element.js";

export default class ButtonMore extends Button {
    constructor() {
        super("buttonMore");
    }

    executor(eventTarget) {
        const element = Element.getElementFromId(eventTarget.parentElement.querySelector("img").id);
        Menu.getMenu("menu-shop-more.html").build(element).displayMenu();
    }
}