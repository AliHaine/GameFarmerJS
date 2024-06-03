export default class Menu {
    static menus = new Map();
    static menuActive = null;

    constructor(element) {
        this.menuHtmlElement = element;
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

    static getMenu(menuId) {
        return Menu.menus.get(menuId);
    }
}