class ButtonClose extends Button {
    constructor() {
        super("buttonClose");
    }

    executor() {
        Menu.menuActive.closeMenu();
    }
}