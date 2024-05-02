class Player {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.handBlock = null;
    }

    getHandBlock() {
        return this.handBlock;
    }

    getMouseX() {
        return this.mouseX;
    }

    getMouseY() {
        return this.mouseY;
    }

    setHandBlock(handBlock) {
        this.handBlock = handBlock;
    }

    setMouseXY(x, y) {
        this.mouseX = x;
        this.mouseY = y;
    }
}