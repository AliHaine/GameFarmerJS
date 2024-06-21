import Map from './src/game/map.js';
import Player from './src/game/player.js';
import LoadGame, {preLoadGame} from "./src/game_manager/game_loader.js";
import Menu from "./src/view/menu.js";
import defineGameSettings from "./src/game_manager/game_settings.js";

/*document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    initGame();
});*/

preLoadGame();

export default function initGame() {
    defineGameSettings();
    Menu.closeCurrentMenu();
    LoadGame();
    new Player();
    new Map();
}