class Menu {
    static menuActive = null;
    constructor(element) {
        this.menuHtmlElement = element;
        this.menuHtmlButtons = element.getElementsByTagName("button");
    }

    setMenuActive() {
        Menu.menuActive = this;
    }

    closeMenu() {
        this.menuHtmlElement.style.display = "none"
        Menu.menuActive = null;
    }

    openMenu() {
        if (Menu.menuActive !== null)
            Menu.menuActive.closeMenu();
        this.menuHtmlElement.style.display = "flex";
        this.setMenuActive();
    }

    displayMenu() {
        this === Menu.menuActive ? Menu.menuActive.closeMenu() : this.openMenu();
    }

    getHtmlButton(index) {
        return this.menuHtmlButtons[index];
    }
}