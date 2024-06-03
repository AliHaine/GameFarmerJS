import Map from './src/game/map.js';
import Player from './src/game/player.js';
import LoadGame from "./src/game_manager/game_loader.js";
import {SOUND} from "./src/game_manager/game_assets.js";

document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    initGame();
});

function initGame() {
    LoadGame();
    new Player();
    new Map();
    document.getElementById("menuStart").remove();
}

function defineGameSettings(inputs_value) {
    if (!inputs_value[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}