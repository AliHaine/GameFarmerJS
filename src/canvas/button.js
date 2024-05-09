class Button {
    constructor(name) {
        if (this.constructor === Button)
            throw new Error("Abstract classes can't be instantiated.");
        this.name = name;
    }

    executor(event) {
        throw new Error("This function need to be implemented");
    }

    static tryToGetButtonFromName(name) {
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