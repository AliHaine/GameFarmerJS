import Button from "../button.js";
import Menu from "../menu.js";

export default class ButtonApply extends Button {
    constructor() {
        super("buttonApply");
    }

    executor() {
        const inputs = document.querySelectorAll("#menuSettings input");
        SOUND.DEFAULT_SOUND.volume = inputs[0].value;
        Menu.menus.get("menuSettings").closeMenu();
        displayMessageToAlertBox(ENG_LANG.SETTINGS_APPLIED)
    }
}