import Button from "../button.js";
import Menu from "../menu.js";
import {SOUND} from "../../game_manager/game_assets.js";
import {displayMessageToAlertBox} from "../render.js";

export default class ButtonApply extends Button {
    constructor() {
        super("buttonApply");
    }

    executor(eventTarget) {
        const inputs = eventTarget.parentElement.querySelectorAll("input");
        SOUND.DEFAULT_SOUND.volume = inputs[0].value;
        Menu.closeCurrentMenu();
        displayMessageToAlertBox(ENG_LANG.SETTINGS_APPLIED)
    }
}