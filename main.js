import Map from './src/game/map.js';
import Player from './src/game/player.js';
import LoadGame, {preLoadGame} from "./src/game_manager/game_loader.js";
import {SOUND} from "./src/game_manager/game_assets.js";
import Menu from "./src/view/menu.js";

/*document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    initGame();
});*/

preLoadGame();

export default function initGame() {
    LoadGame();
    new Player();
    new Map();
    defineGameSettings(Menu.getCurrentMenu().querySelectorAll("input"))
    Menu.closeCurrentMenu();
}

function defineGameSettings(inputs_value) {
    if (!inputs_value[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}