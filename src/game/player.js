class Player {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.handElement = null;
    }

    getHandElement() {
        return this.handElement;
    }

    getMouseX() {
        return this.mouseX;
    }

    getMouseY() {
        return this.mouseY;
    }

    setHandElement(handElement) {
        this.handElement = handElement;
    }

    setMouseXY(x, y) {
        this.mouseX = x;
        this.mouseY = y;
    }
}