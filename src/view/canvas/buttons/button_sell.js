import Button from "../button.js";

export default class ButtonSell extends Button {
    constructor() {
        super("buttonSell");
    }

    executor() {
        console.log("Executor Button Sell");
    }
}