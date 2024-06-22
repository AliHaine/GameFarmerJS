import Button from "../button.js";
import Menu from "../menu.js";

export default class ButtonMore extends Button {
    constructor() {
        super("buttonMore");
    }

    executor(eventTarget) {
        console.log(eventTarget.parentElement);
        eventTarget.parentElement;
        Menu.getMenu("menu-shop-more.html").displayMenu();
    }
}