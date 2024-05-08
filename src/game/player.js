class Player {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.handElement = null;
        this.handElementQuantity = 1;
        this.money = 500;
        this.menuActive = false;
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

    getHandElementQuantity() {
        return this.handElementQuantity;
    }

    getMoney() {
        return this.money;
    }

    setHandElement(handElement) {
        this.handElement = handElement;
    }

    setMouseXY(x, y) {
        this.mouseX = x;
        this.mouseY = y;
    }

    setHandElementQuantity(handElementQuantity) {
        this.handElementQuantity = handElementQuantity;
    }

    addMoney(number) {
        this.money += number;
    }

    removeMoney(number) {
        this.money -= number;
    }

    setMenuActive(menuActive) {
        this.menuActive = menuActive;
    }

    isMenuActive() {
        return this.menuActive;
    }

    toggleMenuActive() {
        this.menuActive = !this.menuActive;
    }
}