class ButtonClose extends Button {
    constructor() {
        super("button_close");
    }

    executor() {
        Menu.menuActive.closeMenu();
    }
}