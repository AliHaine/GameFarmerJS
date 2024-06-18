import Button from "../button.js";

export default class ButtonBuy extends Button {
    constructor() {
        super("buttonBuy");
    }

    executor(eventTarget) {
        console.log("Executor Button Buy", eventTarget.parentElement);
    }
}