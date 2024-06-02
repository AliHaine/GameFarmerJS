import Button from "../button.js";
import Menu from "../menu.js";

export default class ButtonClose extends Button {
    constructor() {
        super("buttonClose");
    }

    executor() {
        Menu.menuActive.closeMenu();
    }
}