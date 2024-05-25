class Button {
    constructor(name) {
        if (this.constructor === Button)
            throw new Error("Abstract classes can't be instantiated.");
        this.name = name;
    }

    executor() {
        throw new Error("This function need to be implemented");
    }

    static tryToGetButtonFromTarget(target) {
        if (target.classList.contains("buttonClose")) return BUTTON.CLOSE;
        if (target.parentElement === null)
            return null;
        name = target.parentElement.textContent;
        for (const button in BUTTON) {
            if (name === BUTTON[button].getName())
                return BUTTON[button];
        }
        return null;
    }

    getName() {
        return this.name;
    }
}