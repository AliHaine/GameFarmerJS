import Button from "../button.js";

export default class ButtonSell extends Button {
    constructor() {
        super("buttonSell");
    }

    executor(eventTarget) {
        console.log("Executor Button Sell");
    }
}