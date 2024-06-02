import * as Listeners from "./src/game_manager/listeners.js";
import Map from './src/game/map.js';
import Player from './src/game/player.js';
import Element from './src/element/element.js';
import ElementGround from "./src/element/elements/element_ground.js";
import ActionPlowe from "./src/element/element_actions/action_plowe.js";
import ActionUnplowe from "./src/element/element_actions/action_unplowe.js";
import ElementDefault from "./src/element/elements/element_default.js";
import {RESOURCE} from "./src/game_manager/game_setting.js";
import ActionPrune from "./src/element/element_actions/action_prune.js";
import ElementCrop from "./src/element/elements/element_crop.js";
import Button from "./src/view/canvas/button.js";
import ButtonApply from "./src/view/canvas/buttons/button_apply.js";
import ButtonBuy from "./src/view/canvas/buttons/button_buy.js";
import ButtonSell from "./src/view/canvas/buttons/button_sell.js";
import ButtonClose from "./src/view/canvas/buttons/button_close.js";
import Menu from "./src/view/canvas/menu.js";

document.getElementById('buttonPlay').addEventListener('click', function() {
    defineGameSettings(document.getElementsByTagName("input"));
    //document.getElementById("menuStart").remove();
    initGame();
});

function initGame() {
    loadElements();
    loadMenus();
    loadButtons();
    new Player();
    new Map();
    loadListeners();
    document.getElementById("menuStart").remove();
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
        Menu.menus.get("menuSettings").displayMenu()
    });

    document.getElementsByClassName("right-item")[0].addEventListener("click", function(event) {
        Menu.menus.get("menuShop").displayMenu()
    });

    document.getElementById("menus").addEventListener("click", function(event) {
        const button = Button.tryToGetButtonFromTarget(event.target);
        if (!button)
            return;
        button.executor();
    });

    document.addEventListener('mousemove', Listeners.mouseMove);
    document.addEventListener("mousedown", Listeners.mouseDown);

    TOOLBAR_CATEGORY.CROP.addEventListener("mousedown", Listeners.mouseDownToolBar);
    TOOLBAR_CATEGORY.FENCE.addEventListener("mousedown", Listeners.mouseDownToolBar);
}

function loadElements() {
    new ElementGround(IMG.GRASS, new ActionPlowe());
    new ElementGround(IMG.GRASS_SIDE);
    new ElementGround(IMG.GRASS_CORNER);
    new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());

    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(RESOURCE.LEAF);
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(RESOURCE.ROCK, 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(RESOURCE.SEED);
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(RESOURCE.WOOD, 2);
    (new ElementDefault(IMG.TREE0, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(Element.getElementFromId("trunk0"));
    (new ElementDefault(IMG.TREE1, new ActionPrune())).setNaturalSpawnChance(20).setLootable(RESOURCE.WOOD, 7).setBlockChild(Element.getElementFromId("trunk0"));
    (new ElementDefault(IMG.FENCE_WOOD_0)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_1)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_2)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_3)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_4)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_5)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_6)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_7)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    (new ElementDefault(IMG.FENCE_WOOD_8)).setLootable(RESOURCE.WOOD).setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);

    new ElementCrop(IMG.MELON, "Melon", 1000, RESOURCE.FRUIT);
    new ElementCrop(IMG.WHEAT, "Wheat", 1500, RESOURCE.FRUIT, 5);
    new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, RESOURCE.FRUIT, 3);
    new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, RESOURCE.FRUIT);
    new ElementCrop(IMG.CHILI, "Chili", 700, RESOURCE.FRUIT, 2);
}

function loadButtons() {
    Button.buttons.push(new ButtonApply(), new ButtonBuy(), new ButtonSell(), new ButtonClose())
}

function loadMenus() {
    Menu.menus.set("menuSettings", new Menu(document.getElementById("menuSettings")));
    Menu.menus.set("menuShop", new Menu(document.getElementById("menuShop")));
}

function defineGameSettings(inputs_value) {
    if (!inputs_value[4].checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}