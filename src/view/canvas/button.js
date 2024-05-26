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
        const classList = target.classList;
        for (const button in BUTTON) {
            if (classList.contains(BUTTON[button].getName()))
                return BUTTON[button];
        }
        return null;
    }

    getName() {
        return this.name;
    }
}