import Button from "../button.js";
import Menu from "../menu.js";
import {SOUND} from "../../../game_manager/game_assets.js";
import {displayMessageToAlertBox} from "../../render.js";

export default class ButtonApply extends Button {
    constructor() {
        super("buttonApply");
    }

    executor() {
        const inputs = document.querySelectorAll("#menuSettings input");
        SOUND.DEFAULT_SOUND.volume = inputs[0].value;
        Menu.getMenu("menuSettings").closeMenu();
        displayMessageToAlertBox(ENG_LANG.SETTINGS_APPLIED)
    }
}