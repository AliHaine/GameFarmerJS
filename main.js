import * as Listeners from "./src/game_manager/listeners";
import Map from './src/game/map.js';
import Player from './src/game/player.js';
import * as Element from './src/element/element.js';

document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    document.getElementById("menuStart").remove();
    initGame();
});

function initGame() {
    Element.loadElements();
    new Player();
    new Map();
    loadListeners();
}

function loadListeners() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    })

    document.addEventListener("animationend", (event) => {
        if (event.target.classList.contains('resourceCollectedAnimation'))
            return event.target.remove();
    });

    document.getElementsByClassName("left-item")[0].addEventListener("click", function(event) {
        MENU.SETTINGS.displayMenu()
    });

    document.getElementsByClassName("right-item")[0].addEventListener("click", function(event) {
        MENU.SHOP.displayMenu()
    });

    document.getElementById("menus").addEventListener("click", function(event) {
        const button = Button.tryToGetButtonFromTarget(event.target);
        if (button === null)
            return;
        button.executor();
    });

    document.addEventListener('mousemove', Listeners.mouseMove);
    document.addEventListener("mousedown", Listeners.mouseDown);

    TOOLBAR_CATEGORY.CROP.addEventListener("mousedown", Listeners.mouseDownToolBar);
    TOOLBAR_CATEGORY.FENCE.addEventListener("mousedown", Listeners.mouseDownToolBar);
}

function defineGameSettings(inputs_value) {
    if (!inputs_value[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}