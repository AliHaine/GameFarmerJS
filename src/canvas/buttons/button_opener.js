class ButtonOpener extends Button {
    constructor(name, attachedMenu) {
        super(name);
        this.attachedMenu = attachedMenu;
    }

    executor() {
        Menu.menuActive === this.attachedMenu ? Menu.menuActive.closeMenu() : this.attachedMenu.displayMenu();
    }
}