export default class Button {
    static buttons = [];

    constructor(name) {
        if (this.constructor === Button)
            throw new Error("Abstract classes can't be instantiated.");
        this.name = name;
    }

    executor(eventTarget) {
        throw new Error("This function need to be implemented");
    }

    static tryToGetButtonFromTarget(target) {
        return Button.buttons.find((button) => target.classList.contains(button.getName()));
    }

    getName() {
        return this.name;
    }
}