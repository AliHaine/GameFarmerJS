class ButtonApply extends Button {
    constructor() {
        super("buttonApply");
    }

    executor() {
        const inputs = document.querySelectorAll("#menuSettings input");
        SOUND.DEFAULT_SOUND.volume = inputs[0].value;
        MENU.SETTINGS.closeMenu();
        displayMessageToAlertBox(ENG_LANG.SETTINGS_APPLIED)
    }
}