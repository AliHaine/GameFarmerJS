import Button from "../button.js";
import initGame from "../../../main.js";

export default class ButtonPlay extends Button {
    constructor() {
        super("buttonPlay");
    }

    executor(eventTarget) {
        initGame();
    }
}