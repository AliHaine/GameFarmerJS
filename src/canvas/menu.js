class Menu {
    static menuActive = null;
    constructor(element) {
        this.menuHtmlElement = element;
        this.menuId = element.id;
        this.menuTitle = element.getElementsByTagName("h1")[0].textContent;
        this.menuHtmlButtons = element.getElementsByTagName("button");
    }

    setMenuActive() {
        Menu.menuActive = this;
    }

    closeMenu() {
        this.menuHtmlElement.style.display = "none"
        Menu.menuActive = null;
    }

    displayMenu() {
        if (Menu.menuActive !== null)
            Menu.menuActive.closeMenu();
        this.menuHtmlElement.style.display = "flex";
        this.setMenuActive();
    }

    getHtmlButton(index) {
        return this.menuHtmlButtons[index];
    }
}