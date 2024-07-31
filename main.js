import {preLoadGame} from "./src/game_manager/game_loader.js";
import loadGame from "./src/game_manager/game_loader.js";

document.getElementById("buttonPlay").addEventListener("click", function(e) {
    preLoadGame();
    document.getElementsByClassName("menu")[0].remove();
    e.target.removeEventListener('click', this, false);
    loadGame();
});