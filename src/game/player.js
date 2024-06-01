class Player {
    static player;
    infiniteResources = document.getElementById("inputInfiniteRes").value;


    constructor() {
        Player.player = this;

        this.mouseX = 0;
        this.mouseY = 0;
        this.handElement = null;
        this.handElementQuantity = 1;
        this.money = 500;
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

    getInfiniteResources() {
        return this.infiniteResources
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

    isUnderMenu() {
        return Menu.menuActive !== null;
    }
}

export default Player;