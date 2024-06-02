import Button from "../button.js";

export default class ButtonBuy extends Button {
    constructor() {
        super("buttonBuy");
    }

    executor() {
        console.log("Executor Button Buy");
    }
}